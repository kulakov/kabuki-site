# kabuki-site — заметки для Claude

## ⚠️ Деплой: ВАЖНО

**Домен `kabuki.lance.ru` прикреплён к Vercel-проекту `diafilm-kurosawa`, а НЕ к `kabuki-site`.**

### Правильный `.vercel/project.json`

```json
{"projectId":"prj_UqBCoZboHZqyyMqWFc3QQ8w3aITJ","orgId":"team_0PP2vTwRrpAExfp3hDxwFR2z","projectName":"diafilm-kurosawa"}
```

Перед `vercel deploy --prod` всегда `cat .vercel/project.json` — должно стоять `diafilm-kurosawa`.

### Если /private/tmp/ почистил .git

Не клонируй через `git clone https://...` (часто рвётся). Используй:
```
gh repo clone kulakov/kabuki-site /tmp/kabuki-site-fresh -- --depth 1
```

Затем восстанови `.vercel/project.json` (значения выше).
