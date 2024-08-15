const fs = require('fs');
const path = require('path');
const os = require('os');

// 獲取當前時間
const now = new Date();
const options = { timeZone: 'Asia/Hong_Kong', hour12: false };
const hongKongTime = now.toLocaleString('zh-CN', options);

const year = now.getFullYear();
const month = now.getMonth() + 1; // 月份從 0 開始，所以要加 1
const day = now.getDate();
const hours = now.getHours();
const minutes = now.getMinutes();

// 生成文本
const text = `陈平有话说，真话不得不说，大家好，我是犟老头陈平，今天是香港时间${year}年${month}月${day}日下午${hours}点${minutes}分。`;

// 獲取 home 目錄，並在其中創建 lines 文件夾
const homeDir = os.homedir();
const dir = path.join(homeDir, 'isuntv', 'lines');

// 確保文件夾存在
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
}

// 獲取文件夾中的文件列表，並決定下一個文件的名稱
const files = fs.readdirSync(dir);
const nextNumber = String(files.length + 1).padStart(8, '0');
const filename = `${nextNumber}.txt`;

// 組合文件路徑
const filePath = path.join(dir, filename);

// 將台詞寫入文件
fs.writeFileSync(filePath, text, 'utf8');

console.log(`文件已保存: ${filePath}`);
