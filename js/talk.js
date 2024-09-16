new TypeIt("#tqyxhj", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("李梓航 && 刘瑞轩")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("我们的第一个月祝我们满月快乐")
    .pause(3000)
    .go();

new TypeIt('#talkToXHJ', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 100
}).go();