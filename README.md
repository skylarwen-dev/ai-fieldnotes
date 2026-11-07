# AI FIELDNOTES｜生成式 AI 學習手札

第九週作業：建立自己的小專案與 `AGENTS.md`，讓 AI 能依照同一套規則繼續開發。

網站以繁體中文介紹生成式 AI，包含六篇筆記、搜尋、三類主題篩選、獨立文章頁、範例複製與協作規則說明。採用紙色、墨綠與淡綠的閱讀介面，支援手機瀏覽。

## 本機操作

需要 Node.js 20 以上；沒有第三方依賴，無須安裝套件。

```sh
node scripts/build.mjs
node scripts/check.mjs
node scripts/serve.mjs
```

開啟 http://127.0.0.1:4173 。若有 npm，也可以分別使用 `npm run build`、`npm run check`、`npm start`。也可直接開啟建置後的 `dist/index.html` 閱讀網站；複製按鈕是否可用取決於瀏覽器的剪貼簿權限。

## 新增內容

先讀 [AGENTS.md](AGENTS.md)，複製 [文章範本](templates/note-template.json)，將新物件加入 `content/notes.json`，重新建置與檢查。首頁卡片、分類搜尋資料、相關文章連結與獨立文章頁會依內容自動產生。

內容、版型、樣式分別存於 `content/`、`templates/`、`assets/`；請勿直接修改 `dist/`。

## GitHub Pages 發布

1. 在自己的 GitHub 帳號建立公開儲存庫 `ai-fieldnotes`，將**此資料夾內**的完整專案放在儲存庫根目錄；不要上傳上層其他作業。
2. 在 Settings → Pages → Build and deployment → Source 選擇 **GitHub Actions**。
3. 專案的 `.github/workflows/pages.yml` 會於推送 `main` 時建置、檢查及部署 `dist/`。
4. 在 Actions 確認工作流程成功，再開啟 Pages 顯示的實際網址。不得把預計網址寫成已部署成功。

## 內容與 AI 協作

此作品透過 AI 協作建立專案規則、程式與筆記初稿。技術內容引用 Attention Is All You Need、RAG、Latent Diffusion 原始論文，文章內均附來源。其他提示詞、畫面簡報與檢查表是本專案自擬範例。練習沒有被冒稱為已完成的個人實測；請在繳交前實際操作並確認內容符合自己的理解。

## 檢查範圍

`scripts/check.mjs` 驗證必要欄位、分類、slug 唯一性、四段文章結構、來源、相關文章、本機檔案連結與頁內錨點。不驗證外部網站的可用性，也不能代替瀏覽器的視覺與互動檢查。
