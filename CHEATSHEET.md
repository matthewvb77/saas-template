# VS Code Shortcuts

Many of these came from [Fireship's great course](https://fireship.io/courses/vscode-tricks)!

Listed commands are for Windows and Linux. \
For Mac, switch `Ctrl` -> `Cmd` and `Alt` -> `Opt` unless otherwise specified.

`Ctrl + shift + v`: To see this file formatted

## The Basics

`Alt + tab`: Switch window (Mac: Cmd + tab) \
`Ctrl + s`: Save file \
`Ctrl + z`: Undo \
`Ctrl + shift + z`: Redo \
`Ctrl + x`: Cut (In VS Code, it will copy the entire line, no need to highlight) \
`Ctrl + c`: Copy (In VS Code, it will copy the entire line, no need to highlight) \
`Ctrl + v`: Paste \
`Ctrl + f`: Find \
`Ctrl + shift + f`: Find in project

## IDE

`Ctrl + w`: Close current file

`Ctrl + p`: Open command palette (Great for opening files)

> Type '>' to run IDE commands (or `Ctrl + shift + p`) \
> Type ':' to go to a certain line in the file (or `Ctrl + g`, also Ctrl on Mac) \
> Type '@' for code symbols in current file

`Ctrl + Page Up or Page Down`: Move to tab left or right (`Cmd + opt + ⬅️ or ➡️` on Mac) \
`Ctrl + alt + ⬅️ or ➡️`: Move current tab to left or right group (`Cmd + ctrl + ⬅️ or ➡️` on Mac)

`` Ctrl + ` ``: Focus/unfocus terminal (Exception: still Ctrl on Mac) \
`` Ctrl + shift + ` ``: New terminal (Exception: still Ctrl on Mac)

`Ctrl + space`: Intellisense hints (Also Ctrl on Mac) \
`Ctrl + shift + space`: Intellisense param hints (Also Ctrl on Mac)

## Text Editing

`Ctrl + /`: Comments current line or highlighted lines \
`Ctrl + enter` to make a new line and move your cursor there

`Ctrl + ⬅️ or ➡️`: Move cursor to start/end of word (`Opt + ⬅️ or ➡️` on Mac) \
`Cmd + ⬅️ or ➡️`: Move cursor to start/end of line (Only Mac) \
Add shift to highlight

Highlight something, then press opening key (like `(`, `[`, `{`, `'`, `"`, `<`) to wrap

`Ctrl + click` a variable or function to view the definition \
Press `F2` on symbol to rename it everywhere \
Press `F12` on symbol to see everywhere it's referenced

`Ctrl + l`: Highlight current line, press again to highlight next line \
`Alt + ⬆️ or ⬇️`: Move current line or highlighted text up or down \
`Alt + shift + ⬆️ or ⬇️`: Duplicate current line

#### Multi Cursor:

> `Alt + click`: Set multiple cursors \
> `Ctrl + alt + ⬆️ or ⬇️`: Spawn new cursor above or below \
> `Ctrl + d`: Puts extra cursor on next instance of the symbol your cursor is on \
> `Ctrl + shift + l`: Puts cursor on every instance of the word your cursor is on

#### Emmet ([Cheat Sheet](https://docs.emmet.io/cheat-sheet/)):

> Command Palette: `Emmet: Balance (outward)` to highlight parent element \
> Command Palette: `Emmet: Wrap with Abbreviation` to wrap highlighted text in element

## Other Tips

Open settings with `Ctrl + ,`

> Enable `Bracket Pair Colorization` \
> Enable `Linked Editing`

## Ones I use less often

Command Palette: `Fold All` to fold all code in the focused file \
`Ctrl + shift + [`: Fold section (`Cmd + opt + [` on Mac) \
`Ctrl + shift + ]`: Unfold section (`Cmd + opt + ]` on Mac)
