

const createNotification = async (sender,reciever,t_id,message) =>{
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sender,
        reciever,
        t_id,
        message
      }),
    }
    try{
      const response = await fetch('http://localhost:3000/api/notification',postData)
      const noti = await response.json()
      return noti;
    }catch(error){
        console.error('Error fetching products :', error); 
    }
  }

  export {
    createNotification
  }