## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                 | Action                                           |
| :---------------------- | :----------------------------------------------- |
| `pnpm install`          | Installs dependencies                            |
| `pnpm run dev`          | Starts local dev server at `localhost:4321`      |
| `pnpm run build`        | Build your production site to `./dist/`          |
| `pnpm run preview`      | Preview your build locally, before deploying     |
| `pnpm exec astro ...`   | Run CLI commands like `astro add`, `astro check` |
| `pnpm exec astro --help`| Get help using the Astro CLI                     |

## For upgrading

```bash
pnpm update
```


## RSS feed issues

- Date should not have time, RSS feed xml generation does not work with IST dates
- For blog markdown flies, only use lower case letters and hyphens. Upper case messes up the RSS feed xml generator