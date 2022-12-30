import type { UserConfig } from '@commitlint/types'

const Configuration: UserConfig = {
  extends: [`@commitlint/config-conventional`],
  ignores: [(commit) => commit.includes('Release')],
  rules: {
    'type-enum': [
      2,
      `always`,
      [
        `feat`,
        `fix`,
        `docs`,
        `style`,
        `refactor`,
        `perf`,
        `test`,
        `chore`,
        `revert`,
      ],
    ],
  },
}

module.exports = Configuration
