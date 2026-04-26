# kabuki-site — заметки для Claude

## ⚠️ Деплой: ВАЖНО

**Домен `kabuki.lance.ru` прикреплён к Vercel-проекту `diafilm-kurosawa`, а НЕ к `kabuki-site`.**

Оба проекта живут в одной команде `kulakovs-projects-4138ce84` (team_0PP2vTwRrpAExfp3hDxwFR2z).

### Правильный `.vercel/project.json`

```json
{
  "projectId": "prj_UqBCoZboHZqyyMqWFc3QQ8w3aITJ",
  "orgId": "team_0PP2vTwRrpAExfp3hDxwFR2z",
  "projectName": "diafilm-kurosawa"
}
```

**Перед деплоем всегда проверяй `cat .vercel/project.json`** — там должно стоять `diafilm-kurosawa`. Если стоит `kabuki-site` — деплой полетит на `kabuki-site.vercel.app`, а `kabuki.lance.ru` останется со старой версией.

### Как восстановить, если перепутал

```bash
echo '{"projectId":"prj_UqBCoZboHZqyyMqWFc3QQ8w3aITJ","orgId":"team_0PP2vTwRrpAExfp3hDxwFR2z","projectName":"diafilm-kurosawa"}' > .vercel/project.json
vercel deploy --prod --yes
```

### Проверка после деплоя

```bash
curl -sI "https://kabuki.lance.ru/roles.html" | grep -iE "age|last-mod"
```

`age` должен быть < 60, `last-modified` — свежее. Если `age` в часах — деплой улетел не туда.

### Признак ошибки

Если коммит ушёл в git (`kulakov/kabuki-site` репозиторий) и `kabuki-site.vercel.app` обновился, но `kabuki.lance.ru` стоит — значит `.vercel/project.json` указывает на `kabuki-site` вместо `diafilm-kurosawa`. История: эта ловушка ловила нас уже несколько раз.

---

## Прочее

- GitHub: `kulakov/kabuki-site`
- Папка локально: `/private/tmp/claude-502/kabuki-site/` (эфемерная — может исчезать)
- Команда Vercel: kulakov's projects (Hobby), id `kulakovs-projects-4138ce84`
