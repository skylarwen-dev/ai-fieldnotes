# 驗證紀錄

驗證日期：2026-11-07（Asia/Taipei）。

## 建置與發布

- `node scripts/build.mjs`：成功產生首頁、關於頁及六篇文章，共八頁。
- `node scripts/check.mjs`：文章必要欄位、唯一 slug、分類、四節結構、來源、相關文章、頁數、站內資產與錨點通過。
- Node 語法檢查：build.mjs、check.mjs、app.js 通過。
- [首次 GitHub Actions 發布](https://github.com/skylarwen-dev/ai-fieldnotes/actions/runs/42352002924)：build 與 deploy 成功，包含雲端執行 `npm run build` 與 `npm run check`。
- [公開網站](https://skylarwen-dev.github.io/ai-fieldnotes/) 已用瀏覽器實際開啟，並確認樣式與文章內容載入。

## 公開網站互動

| 操作 | 實際結果 |
| --- | --- |
| 首頁閱讀 | 六篇筆記及導覽可見 |
| 點選「圖像生成」 | 僅顯示兩篇對應文章 |
| 搜尋不存在的字串 | 顯示 0 篇、空結果提示與重設按鈕 |
| 清除搜尋與分類，再搜尋 RAG | 回到全部分類，再正確顯示一篇 RAG 筆記 |
| 開啟 RAG 筆記 | 進入獨立文章頁，顯示四節、來源與相關文章 |
| 點選複製範例 | 按鈕顯示已複製；剪貼簿讀回內容與範例一致 |
| 點選「動手練習」目錄 | URL 正確切換至 #section-4 |
| 返回所有筆記 | 回到首頁筆記區 |
| 關於與協作規則 | 正常顯示新增內容步驟、範本與規則入口 |
| 窄螢幕 | 手機首頁為一欄；窄螢幕文章可讀，檢查時文件 scrollWidth 等於 clientWidth，未出現橫向溢位 |

截圖保存於本機專案上層的「驗證截圖」資料夾，未將其他課堂檔案上傳 GitHub。

## 驗證限制

這些是網站功能與排版測試，不是六篇文章中練習活動的實測紀錄。未宣稱做過完整跨瀏覽器、螢幕閱讀器或停用 JavaScript 的手動測試；來源連結的存在不等於本文取代原論文。
