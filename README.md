# AI FIELDNOTES｜生成式 AI 學習手札

第九週作業：建立自己的小專案與 `AGENTS.md`，讓 AI 能依照同一套規則繼續開發。

- [公開網站](https://skylarwen-dev.github.io/ai-fieldnotes/)
- [GitHub Repository](https://github.com/skylarwen-dev/ai-fieldnotes)
- [專案協作規則 AGENTS.md](AGENTS.md)
- [實際驗證紀錄](VALIDATION.md)

網站以繁體中文介紹生成式 AI，包含六篇筆記、搜尋、三類主題篩選、獨立文章頁、範例複製與協作規則說明。採用紙色、墨綠與淡綠的閱讀介面，支援手機瀏覽。

## 本機操作

需要 Node.js 20 以上；沒有第三方依賴，無須安裝套件。

```sh
node scripts/build.mjs
node scripts/check.mjs
node scripts/serve.mjs
```

開啟 http://127.0.0.1:4173 。若有 npm，也可以分別使用 `npm run build`、`npm run check`、`npm start`。也可直接開啟建置後的 `dist/index.html` 閱讀網站；複製按鈕是否可用取決於瀏覽器的剪貼簿權限。


