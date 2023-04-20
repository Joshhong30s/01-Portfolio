---
title: 'Tailwind CSS 使用心得，開發速度有感提升'
date: '2023-03-30'
---

Tailwind CSS 是一個用過後就回不去的東西。為什麼呢？以下簡短介紹 Tailwind 的特色和使用心得

&nbsp;

## Tailwind CSS 的特色

- Utility-first，以功能性 Class 為主
- 直接在 HTML 裡寫入 CSS
- 對 RWD 和 Dark Mode 友善

&nbsp;
&nbsp;

## Tailwind CSS 的厲害之處

我們直接來看一小段本部落格 navbar 以 Tailwind 撰寫的程式碼

```javascript
    <nav className='sticky mx-auto px-4 py-2 sm:px-20 md:py-4 bg-gray-50 drop-shadow-sm top-0 z-10 dark:bg-slate-700'>
      <div className='justify-around md:items-center md:flex'>
        <div className='flex justify-between items-center md:py-1 md:ml-10 md:flex md:space-x-4'>
          <Link href='/'>
            <Image
              src='/logo.png'
              alt=''
              width={40}
              height={40}
              color='transparent'
              className='rounded-md transition duration-300 hover:bg-neutral-700 dark:hover:bg-neutral-100 hover:ease-in cursor-pointer'
            ></Image>
          </Link>
	// 下方為Logo和其他navItem
```

第一次看到可能會覺得眼花撩亂，但其實裡面的樣式都蠻直覺的，例如：

- `px-4`代表水平 padding 各 1rem，相當於傳統 CSS`padding-left: 1rem; padding-right: 1rem;`
- `sm:px-20`代表小型裝置的寬度邊界，只要超過就將 px 設為 20，相當於傳統 CSS`@media (min-width: 640px) {.... };`
- `dark:bg-slate-700`代表深色模式背景顏色使用 Tailwind 預先定義的 slate-700
- `rounded-md`代表 Logo 的圓角使用預先定義的 md，相當於傳統 CSS`border-radius: 0.375rem; `

Tailwind 有預定義的樣式，但這些樣式比如顏色、邊界、元素變化等都有豐富的規格可以使用產生變化。並且**以功能性為優先準則，也就是說一個 class 如`px-4 就負責一件事情**，和傳統 CSS 把一堆樣式寫進一個 div class 完全不同。

寫法則是簡潔直覺，用了一堆 Class 看起來還是比傳統的 CSS 輕巧許多，而且可以在建立元素的同時進行排版，不用反覆切換 HTML 和 CSS，是體驗和速度上的提升。

如果你和我一樣使用 React 和 Next.js，那 HTML/CSS/JS 等同整合在一個檔案，可以輸出成獨立元件再利用。

&nbsp;
&nbsp;

## 與傳統 CSS、Bootstrap 的比較

在之前的小型專案我使用過 CSS 和 Bootstrap，感覺兩者分處於光譜的兩端：

- CSS 的優點是客製化程度高但不容易以駕馭，調個版面彷彿進入精神時光屋，覺得怎麼調都不對不知不覺幾個小時就不見了。
- Bootstrap 可以做到簡單快速，但成品一看就覺得是套 Bootstrap 的版型和配色，除非這個專案是不需要重視 UI 和風格的才比較適合使用。

而 Tailwind 可說介於兩者之間，沒有像傳統 CSS 這麼無拘無束，但仍有充足的彈性和空間作出不同風格的專案，開發速度上也不會輸 Bootstrap，不需要和 Bootstrap 框架的限制抗衡，只是學習曲線稍微高一些，大概要經過一兩個專案的磨練。

&nbsp;
&nbsp;

## 你適合使用 Tailwind 嗎？怎麼判斷這個問題？

Tailwind 是一個有限制的框架，但在這個框架內開發者其實享有更多的自由。我想可以有個比喻：

- 傳統 CSS 就像放馬外出吃草，上下限最高，如果對環境天氣熟悉馬是真的可以吃得飽長得漂亮跑得快，但也有可能一不小心走失要花很多時間去找。
- Bootstrap 是養在馬廄裡的馬，安全方便但通常沒有甚麼個性。
- Tailwind 是養在牧場裡的馬，有個柵欄圈住但裡面已經有許多放好的乾草和飼料，還是可以養出很不錯的馬

端看專案需求和自己對 CSS 的熟悉程度。如果本來就對 CSS 精通能夠快速切版設計，那其實不需要 Tailwind。但對像我非設計底的人而言，使用 Tailwind 既可以保持 UI 的一致性，又能夠快速完成 styling，把更多時間放在功能的實現上。

P.S.這篇文章沒提到 UI 框架如 Material、Chakra 的原因是我不太熟悉(目前只用過 Chakra)，但覺得實用性和速度好像沒有跟 Tailwind 有太大差別，未來有機會再研究看看。
