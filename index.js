const myEmojis = ["👨‍💻", "⛷", "🍲","👦"]

function renderEmojis() {
    const emojiContainer = document.getElementById("emoji-container")
    emojiContainer.innerHTML = ""
    for (let i = 0; i < myEmojis.length; i++) {
        const emoji = document.createElement('span')
        emoji.textContent = myEmojis[i]
        emojiContainer.append(emoji)
    }
}

renderEmojis()

const pushBtn = document.getElementById("push-btn")
pushBtn.addEventListener("click", function(){
    const emojiInput = document.getElementById("emoji-input")
    if (emojiInput.value) {
        myEmojis.push(emojiInput.value)
        emojiInput.value = ""
        renderEmojis()
    }
})

const unshiftBtn = document.getElementById("unshift-btn")
unshiftBtn.addEventListener("click", function(){
    const emojiInput = document.getElementById("emoji-input")
    if (emojiInput.value) {
        myEmojis.unshift(emojiInput.value)
        emojiInput.value = ""
        renderEmojis()
    }
})

const popBtn = document.getElementById("pop-btn")
popBtn.addEventListener("click", function(){
    myEmojis.pop()
    renderEmojis()
})

const shiftBtn = document.getElementById("shift-btn")
shiftBtn.addEventListener("click", function(){
    myEmojis.shift()
    renderEmojis()
})

const all_emojis = ["👮","🍩 ","🎤","🎷","⚓️","🗿","❤️","👮","🎃","😈","👾","😁","😎","👻","👣","👷","🌲"]

function renderAllEmojis(){
    var x = document.getElementById("all-emojis")
    for(let y = 0; y<all_emojis.length; y++){
        var a=document.createElement("span")
        a.textContent=all_emojis[y]
        x.append(a)
    }
}
renderAllEmojis()