# nextjs-supabase-auth

En lille Next.js-app til at øve login med Supabase Auth: sign up, log ind, log ud og en profilside, som kun brugere, der er logget ind, kan se. Opgaven står i [Next.js og Supabase Auth](https://github.com/cederdorff/mdu-e25ixd/blob/main/undervisning/dynamic-user-interface/opgave-2026-10-30-nextjs-supabase-auth.md).

Supabase-klienten i `lib/supabase/server.js` og `proxy.js` er allerede sat op. Du laver routes, formularer og tjekket på serveren.

## Kom i gang

Følg [opgave 1 i opgaven](https://github.com/cederdorff/mdu-e25ixd/blob/main/undervisning/dynamic-user-interface/opgave-2026-10-30-nextjs-supabase-auth.md#opgave-1): Klik på **Use this template → Create a new repository**, og klon dit nye repository i VS Code eller GitHub Desktop.

## Løsninger

`main` er startpunktet. Hver opgave har sin egen branch, der viser projektet, som det ser ud, når opgaven er løst. Klik på "diff" for kun at se det, der er nyt i den opgave.

| Opgave | Branch | Ændring |
| --- | --- | --- |
| 1 · Hent startprojektet | [main](https://github.com/cederdorff/nextjs-supabase-auth/tree/main) | |
| 2 · Sign up | [opgave-02-sign-up](https://github.com/cederdorff/nextjs-supabase-auth/tree/opgave-02-sign-up) | [diff](https://github.com/cederdorff/nextjs-supabase-auth/compare/main...opgave-02-sign-up) |
| 3 · Log ind | [opgave-03-log-ind](https://github.com/cederdorff/nextjs-supabase-auth/tree/opgave-03-log-ind) | [diff](https://github.com/cederdorff/nextjs-supabase-auth/compare/opgave-02-sign-up...opgave-03-log-ind) |
| 4 · Profilen | [opgave-04-profil](https://github.com/cederdorff/nextjs-supabase-auth/tree/opgave-04-profil) | [diff](https://github.com/cederdorff/nextjs-supabase-auth/compare/opgave-03-log-ind...opgave-04-profil) |
| 5 · Flere beskyttede routes | [opgave-05-flere-routes](https://github.com/cederdorff/nextjs-supabase-auth/tree/opgave-05-flere-routes) | [diff](https://github.com/cederdorff/nextjs-supabase-auth/compare/opgave-04-profil...opgave-05-flere-routes) |
| 6 · Login-status i headeren | [opgave-06-header](https://github.com/cederdorff/nextjs-supabase-auth/tree/opgave-06-header) | [diff](https://github.com/cederdorff/nextjs-supabase-auth/compare/opgave-05-flere-routes...opgave-06-header) |

Prøv selv først. Brug løsningen, når du sidder fast, eller når du vil sammenligne med din egen.

## Routes, når alle opgaver er løst

- `/` – forsiden · alle
- `/signup` – opret en bruger · alle
- `/login` – log ind · alle
- `/profile` – e-mail, bruger-id og log ud · kun logget ind
- `/members` – kun for medlemmer · kun logget ind
