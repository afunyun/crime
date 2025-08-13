# crime (CRon tIME)

<<<<<<< HEAD
cron doesn't normally have seconds but it's been added to make the time actually somewhat understandable second-by-second

usecase: none except perhaps as a display above a cronjob translation tool.

actually might be something i'll add now that i think about it

=======
A clock that outputs the current time using (standard except for seconds which are ~~custom~~ and ~~bespoke~~) cron syntax: `second minute hour day-of-month month day-of-week`.

- Copy the full cron-style string by clicking it (or press `c`)
- Press `r` to force refresh
- Dynamic (Express, renders .ejs from server time as truth) or statically rendered (.html, updates locally)

- Might add some sort of cron-conversion functionality with the clock as an example, if I get to it.

## License

MIT
>>>>>>> 91331f4 (update so this actually works on static deploy if desired)
