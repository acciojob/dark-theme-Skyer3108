//your code here
const btn=document.getElementById('swap')
const app=document.getElementById('app')

btn.addEventListener('click',()=>{
	if(app.className=="day"){

		app.className="night"
	}
	else{
		app.className='day'
	}
})

