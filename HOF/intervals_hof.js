//setInterval - itne time ke baad kisi fucntion ko print krte raho

const SayHello=()=>{
    console.log("Hello Zaid");
}

setInterval(SayHello,1000) // after every second , print Hello Zaid


// setTimeout- abhi kuch mat kro but given time interval ke baad ye function ek bar print krdo

const SayBye=()=>{
    console.log("Bye Zaid");
    
}
setTimeout(SayBye,2000)