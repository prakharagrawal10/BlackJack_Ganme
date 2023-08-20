let player={
    name:"Prakh",
    chips: 145
}
let cards=[]
let sum=0
let hasBlackjack=false
let isAlive=false
let message=""
let playerEl=document.getElementById("player-el")

messageEl=document.getElementById("message-el")
sumEl=document.getElementById("sum-el")
cardEl=document.getElementById("card-el")
playerEl.textContent=player.name+": $"+player.chips

function getRandomCard()
{
    let ran= Math.floor(Math.random()*13 )+1
    if (ran>10)
    {
        return 10
    }

    else if (ran==1)
    {
        return 11
    }

    else
    {
        return ran
    }
}

function startgame()
{
    isAlive=true
    let firstCard=getRandomCard()
    let secondCard=getRandomCard()
    cards=[firstCard,secondCard];
    sum=cards[0]+cards[1]
    rendergame()
}
function rendergame()
{
    cardEl.textContent="Card: "

    for (let i=0; i<cards.length;i++)
    {
        cardEl.textContent+=cards[i]+" "
    }
    sumEl.textContent="Sum: " + sum

    if (sum<=20)
    {
        message="Do you want to draw a new card:"
    }

    else if(sum==21)
    {
        message="You got blackjack"
        hasBlackjack=true
    }

    else if(sum>21)
    {
        message="You are out"
        isAlive=false
    }
    messageEl.textContent=message
    console.log(message)

}

function newcard()
{
    if (isAlive==true && hasBlackjack==false)
    {

        let card=getRandomCard()
        sum+=card
        cards.push(card)
        rendergame()
    }

}

