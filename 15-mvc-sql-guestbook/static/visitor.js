const tbody = document.querySelector('tbody');
const btnGroup = document.querySelector('#btnGroup');

// 등록
function createVisitor(){
    const form = document.forms['visitor-form'];
    if(form.name.value.length === 0 || form.comment.value.length === 0){
        alert('이름 또는 방명록 기입해주세요!');
        return;
    }

    if(form.name.value.length > 10){
        alert('이름은 10글자 미만입니다.');
        return;
    }
    axios({
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
            <td><button type="button" onclick="editDo(${data.id})">수정</button></td>
            <td><button type="button" onclick="editCancel()">삭제</button></td>
        </tr>
        `;
        //insertAdjacentHTML: 특정요소에 추가
        tbody.insertAdjacentHTML('beforeend',html);
        form.reset();
    });
}

//폼의 수정버튼 클릭시
// - form input에 값 넣기
// - 변경, 취소 버튼 보이기
function edit(id){
    // 1 form input 값 넣기
    axios({
        method:'get',
        // 1) req.query -> url : `visitor?id=${id}`
        // url:`/visitor?id=${id}`

        // 2) params 이용 -> req.query(서버 -> /visitor 로 들어옴.)
        // url:'/visitor',
        // params:{
        //     id:id
        // }

        // 2-1) params 이용 : (서버) req.params -> /visitor/:id
        url:`/visitor/${id}`
    }).then((res)=>{

        //배열로 가저옴 : [ { id: 1, name: '홍길동', comment: '내가왔다.' } ]
        console.log('edit get data: ',res.data);

        //cb(rows[0]);
        const {name, comment} = res.data;
        const form = document.forms['visitor-form'];

        form.name.value= name;
        form.comment.value= comment;
    });

    const html = `
    <button type="button" onclick="editDo('${id}')">변경</button>
    <button type="button" onclick="editCancel()">취소</button>
    `;
    btnGroup.innerHTML = html;
}

// 수정-> [변경] 버튼 나오니까 [변경] 버튼 클릭시 -> 데이터 변경
function editDo(id){
    const form = document.forms['visitor-form'];
    axios({
        method:'PATCH',
        url:'/visitor',
        data:{
            id:id,
            name:form.name.value,
            comment:form.comment.value
        }

    }).then((res)=>{
        console.log(res.data);

        const children = document.querySelector(`#tr_${id}`).children;
        console.log('static children: ',children);
        children[1].textContent=form.name.value;
        children[2].textContent=form.comment.value;

        //입력창 초기화 : form.reset() 대신에 editCancel로 대체
        editCancel();
    });
}

// 취소 버튼 클릭시
// - input 초기화
// - 등록 버튼 보이기
function editCancel(){
    const form = document.forms['visitor-form'];
    form.reset();
    const html = `
        <button type="button" onclick="createVisitor();">등록</button>
    `;
    btnGroup.innerHTML = html;
}

// 삭제 버튼
// - db에서 삭제
// - 테이블에서 해당 행 삭제
function del(obj, id){
    console.log(obj, id);
    // console.log(confirm('정말 삭제하시겠습니까?'));
    if(!confirm('정말 삭제하시겠습니까?')) return;

    axios({
        method:'DELETE',
        url:'/visitor',
        data:{
            id:id
        }
    }).then((res)=>{
        console.log(res.data);

        // 1) parentElement 두번해서 직접 접근. 
        // obj.parentElement.parentElement.remove();

        // 2) closest() 메서드.
        obj.closest(`#tr_${id}`).remove();
    });
}