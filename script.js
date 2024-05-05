//your code here
const btn=document.getElementById('swap')
const app=document.getElementById('app')



btn.addEventListener('click',()=>{
	if(app.className=="day"){

		app.className="night"
		btn.className='button_night'
		
	}
	else{
		app.className='day'
		btn.className='button_day'
	}
})

