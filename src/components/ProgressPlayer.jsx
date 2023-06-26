import React from 'react'

const ProgressPlayer = ({video}) => {
  return (
    <div
        style={{
            width:'350px',
            height:'100px',
            backgroundColor:'rgba(0, 0, 0, 0.6)',
            borderBottomLeftRadius:'20px',
            borderBottomRightRadius:'20px',
            position:'absolute',
            bottom:'0',
            display:'flex',
            alignItems:'center',
            justifyContent:'center'
,        }}
    >
        <div style={{
                width:'300px',
                flexDirection:'column'
            }}
        >
            <input 
                type="range" 
                name="" 
                id=""
                style={{
                    width:'100%',
                    backgroundColor:'rgb(82, 82, 82)'
                }} 
            />
            <div style={{
                display:'flex',
                justifyContent:'space-between'
            }}>
                <span style={{
                    color:'lightgray',
                    fontSize:'13px'
                }}>1:48</span>
                <span style={{
                    color:'lightgray',
                    fontSize:'13px'
                }}>2:26</span>
            </div>
        </div>
        
    </div>
  )
}

export default ProgressPlayer