

const loadData = async() =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
    const data = await res.json();

    const ai= data.data.tools;
    console.log(ai);
    displayCard(ai);

}

const displayCard = (ai) =>{

    const cardId= document.getElementById('ai-card');

    ai.forEach(card => {
        const aiCard = document.createElement('div');
        aiCard.innerHTML= `

        <div onclick="handleModal('${card.id} ')" 
        class="p-4 border border-gray-400 border-solid rounded-md cursor-pointer">
        <figure class="rounded-md">
            <img src=${card.image} alt="">
        </figure>
        <h4 class="font-bold text-xl">Features</h4>
        <ul class="text-[#585858] text-sm my-2 list-decimal pl-4">
            <li>${card.features[0]}</li>
            <li>${card.features[1]}</li>
            <li>${card.features[2]}</li>
        </ul>
        <hr class="my-2">
        <div class="flex justify-between items-center">
            <div>
                <h4 class="font-bold text-xl mb-2">ChatGPT</h4>
                <div class="flex justify-center gap-1 items-center text-[#585858] text-sm my-">
                    <i class="fa-solid fa-calendar-days"></i>
                    <p>11/01/2022</p>
                </div>

            </div>
            <i class="fa-solid fa-arrow-right rounded-full  bg-[#FEF7F7] p-2 " style="color: #EB5757;"></i>
        </div>
    </div>
</div>
        
        
        `
        cardId.appendChild(aiCard);



       
        
    });

    const handleModal= (id) =>{



        my_modal_3.showModal();

    }





}

loadData();