import * as systemTestUtils from "../systemTestUtils"
import stylelint from "../../src"

it("002", () => {
  return stylelint.lint({
    files: [systemTestUtils.caseStylesheetGlob("002")],
    configFile: systemTestUtils.caseConfig("002", "js"),
  }).then(({ results }) => {
    expect(systemTestUtils.trimResults(results)).toMatchSnapshot()
  })
})
