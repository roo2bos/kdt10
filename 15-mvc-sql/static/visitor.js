const tbody = document.querySelector('tbody');

async function createVisitor(){
    const form = document.forms['visitor-form'];
    if(form.name.value.length === 0 || form.comment.value.length === 0){
        alert('이름 또는 방명록 기입해주세요!');
        return;
    }

    if(form.name.value.length > 10){
        alert('이름은 10글자 미만입니다.');
        return;
    }
    await axios({
        method:'POST',
        url:'/visitor',
        data:{
            name:form.name.value,
            comment:form.comment.value
        }
    }).then((res)=>{
        console.log('res.data : ',res);
        const data = res.data;
        const html = `
        <tr id="tr_${data.id}">
            <td>${data.id}</td>
            <td>${data.name}</td>
            <td>${data.comment}</td>
            <td><button type="button" onclick="mod(this)">수정</button></td>
            <td><button type="button" onclick="del(this)">삭제</button></td>
        </tr>
        `;
        //insertAdjacentHTML: 특정요소에 추가
        tbody.insertAdjacentHTML('beforeend',html);
    });
}