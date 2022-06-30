const Banana = () => {
    const count = 3
    const temp = true
    const data = ['apple', 'banana', 'orange']
    return (
        <>
            <p>Hello Banana!!!</p>
            <p>{count}</p>
            <p>{count + 2}</p>
            <div>
                {/* 반복문 사용 */}
                {data.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
                {/* 조건문 사용 */}
                {temp ? <p>true</p> : <p>false</p>}
            </div>
        </>
    )
}

export default Banana
