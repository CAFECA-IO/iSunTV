const axios = require('axios');
const cheerio = require('cheerio');

// Google News URL
const newsUrl = 'https://news.google.com/topstories?hl=zh-CN&gl=CN&ceid=CN:zh-Hans';
const aiUrl = 'http://211.22.118.146:11434/api/generate';

// 獲取隨機熱門新聞標題
async function getRandomNewsTitle() {
  let title = '';
  try {
    // 爬取網頁
    const response = await axios.get(newsUrl);
    const html = response.data;

    // 使用 cheerio 解析 HTML
    const $ = cheerio.load(html);

    // 選擇所有新聞標題元素
    const newsTitles = [];
    $('a').each((index, element) => {
      // 如果元素包含 target 與 area-hidden 屬性，則可能是新聞標題
      const text = $(element).text();
      if ($(element).attr('target') === '_blank' && text.length > 10) {
        newsTitles.push(text);
        console.log(text);
      }
    });

    // 如果找到新聞標題
    if (newsTitles.length > 0) {
      // 隨機選擇一個新聞標題
      const randomIndex = Math.floor(Math.random() * newsTitles.length);
      title = newsTitles[randomIndex];
    } else {
      console.log('未找到新聞標題');
    }

  } catch (error) {
    console.error('獲取標題失敗: ', error);
  }
  return title;
}

async function askOllama(title) {
  
  const requestData = {
    model: "llama3.1",
    prompt: `請報導虛擬事件新聞「${title}」，並用「哎呦呦，這件事情在我看來...」做總結`,
  };

  try {
    const response = await axios.post(aiUrl, requestData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    // 打印 API 响应
    console.log('Ollama API 响应:', response.data);

  } catch (error) {
    console.error('调用 Ollama API 时出错:', error);
  }
}

const main = async () => {
  const title = await getRandomNewsTitle();
  const comment = await askOllama(title);
  console.log('熱門新聞:', title);
  console.log(comment);
};

main();
