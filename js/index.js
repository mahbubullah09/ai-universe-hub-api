

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

        <div onclick="handleModal('${card.id}')" 
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
                <h4 class="font-bold text-xl mb-2">${card.name}</h4>
                <div class="flex justify-center gap-1 items-center text-[#585858] text-sm my-">
                    <i class="fa-solid fa-calendar-days"></i>
                    <p>${card.published_in}</p>
                </div>

            </div>
            <i class="fa-solid fa-arrow-right rounded-full  bg-[#FEF7F7] p-2 " style="color: #EB5757;"></i>
        </div>
    </div>
</div>
        
        
        `
        cardId.appendChild(aiCard);



       
        
    });






}



const handleModal= async(ID) =>{
    console.log(ID);

    const data= await fetch(`https://openapi.programming-hero.com/api/ai/tool/${ID}`);
    const modal= await data.json();
    // console.log(modal);
    const modalData= modal.data;
    // console.log(modalData.tool_name);
    const modalId= document.getElementById('modal-d');

    modalId.innerHTML='';

    
    const modalDetails= document.createElement('div');
   
    modalDetails.innerHTML=`


    <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 px-2">
        <div class="left bg-[#0d6efd] bg-opacity-5 border border-solid border-[#EB5757] border-opacity-50 rounded-md p-6">

            <h4 class="text-xl font-semibold text-black  ">${modalData.description}</h4>
            <div class="grid  grid-cols-1  md:grid-cols-3 gap-2 text-center my-4 items-center ">
                <div class="bg-white p-3 font-bold text-sm rounded-md text-[#03A30A] h-24 ">
                    <h4 class="item-center py-5">${modalData?.pricing[0]?.price} ${modalData?.pricing[0]?.plan}</h4>
                </div>
                <div class="bg-white p-3 font-bold text-sm rounded-md text-[#F28927]  h-24 ">
                    <h4 class="item-center py-5">${modalData?.pricing[1]?.price} ${modalData?.pricing[1]?.plan}</h4>
                </div>
                <div class="bg-white p-3 font-bold text-sm rounded-md text-[#EB5757] h-24 ">
                    <h4>${modalData?.pricing[2]?.price} ${modalData?.pricing[2]?.plan}</h4>
                </div>
            </div>

            <div class="flex flex-col md:flex-row justify-between ">
                <div class="left">
                    <h4 class="font-bold text-xl mb-2">Features</h4>

                    <ul class="list-disc text-xs text-[#585858]  pl-4">
                        <li>${modalData.features.feature_name}</li>
                        <li>Multilingual support </li>
                        <li>Seamless integration</li>
                    </ul>
                </div>
                <div class="right">
                    <h4 class="font-bold text-xl mb-2">Integrations</h4>

                    <ul class="list-disc text-xs text-[#585858]  pl-4">
                        <li>FB Messenger</li>
                        <li>Slack </li>
                        <li>Telegram</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="right border border-solid border-gray-300 rounded-md p-3 text-center">
            <figure class="relative">
                <img src=${modalData.image_link[0]} alt="">
                <div class="bg-[#EB5757] text-white text-xs rounded-md absolute top-1 right-1 px-4 py-1">
                    <p>94% accuracy</p>
                </div>
            </figure>
            <h4 class="text-xl font-semibold text-black my-3">${modalData.input_output_examples[0].input}</h4>
            <p class="text-[#585858] text-sm px-4">${modalData.input_output_examples[0].output}</p>


        </div>



    </div>
    
    
    
    `

    modalId.appendChild(modalDetails);


    my_modal_3.showModal();
}

loadData();