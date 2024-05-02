//your code here
const btn=document.getElementById('swap')
const app=document.getElementById('app')

btn.addEventListener('click',()=>{
	if(app.className=="day"){

		app.className="nigth"
	}
	else{
		app.className='day'
	}
})

