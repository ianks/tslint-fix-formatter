import * as fs from "fs";
import * as path from "path";
import * as Lint from "tslint";

export class Formatter extends Lint.Formatters.AbstractFormatter {
    public format(failures: Lint.RuleFailure[]): string {
        this.ensureOnlyOneFileInFailuresList(failures);

        const fileName = failures[0].getFileName();
        const fixes = failures.map((f) => f.getFix()).filter((f): f is Lint.Fix => !!f);
        const source = fs.readFileSync(fileName, { encoding: 'utf-8' });

        return Lint.Fix.applyAll(source, fixes);
    }

    public ensureOnlyOneFileInFailuresList(failures: Lint.RuleFailure[]) {
        let visitedCache: { [fileName: string]: true } = {};

        for (const failure of failures) {
            const fileName = failure.getFileName();

            if (fileName in visitedCache) {
                throw new Error("Only one file can be linted with the fix linter");
            } else {
                visitedCache[fileName] = true;
            }
        }
    }
}
