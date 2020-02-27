import * as Path from 'path'
import * as recursive from 'recursive-readdir'
import * as Fs from 'fs'
import * as xregexp from 'xregexp'

const root = Path.resolve(__dirname, '..')

recursive(root, ['!*.js'], (error, files) => {
    files.forEach(file => {
        const fileContent = Fs.readFileSync(file, 'utf-8')
        const regex = xregexp(/require\(["']([^"']*)["']\)/)
        const modifiedFileContent = xregexp.replace(
            fileContent,
            regex,
            (wholeRequire: any, modulePath: any) => {
                try {
                    require(modulePath)
                    return wholeRequire
                } catch (error) {
                    let newRequirePath = Path.relative(`${file}/..`, `${root}/${modulePath}`)
                    if (newRequirePath[0] !== '.') newRequirePath = './' + newRequirePath
                    return `require("${newRequirePath}")`
                }
            },
            'all'
        )
        Fs.writeFileSync(file, modifiedFileContent, 'utf-8')
    })
})
