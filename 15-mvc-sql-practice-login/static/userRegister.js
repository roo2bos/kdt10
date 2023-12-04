const $loading = document.querySelector('.loading');
window.onload=function(){
    $loading.classList.add('hide');
}
//회원가입 (signup.ejs)
function signup() {
    const form = document.forms['form'];
    const resultBox = document.querySelector('.resultbox');
    let data = {
        name: form.name.value,
        userid: form.userid.value,
        pw: form.pw.value
    };
    /* if(!form.name.checkValidity() || !form.userid.checkValidity() || !form.pw.checkValidity()){
        resultBox.textContent ='아이디 패스워드는 필수값입니다!';
        resultBox.classList.remove('success');
        resultBox.classList.add('error');
        return;
    } */
    if(!form.checkValidity()){ 
        form.reportValidity();
        return;
    }
    axios({
        method: 'post', 
        url: '/user/signup', 
        data: data
    }).then((res)=>{
        form.reset();
        alert(`회원가입 완료 되었습니다.`);
        setTimeout(function(){
            location.href="/user/signin";
        },1000);
    });
}

//로그인 (signin.ejs)
async function signin() {
    const form = document.forms['form'];
    const currForm = document.forms['currentForm'];
    const resultBox = document.querySelector('.resultbox');
    if(!form.userid.checkValidity() || !form.pw.checkValidity()){
        if(!form.userid.checkValidity()){
            resultBox.textContent ='아이디는 필수값입니다!';
        }else{
            resultBox.textContent ='패스워드는 필수값입니다!';
        }
        resultBox.classList.remove('success');
        resultBox.classList.add('error');
        return;
    }
    try{
        let datas = {
            userid: form.userid.value,
            pw: form.pw.value
        };
        let res = await axios({
            method: 'post', 
            url: '/user/signin', 
            data: datas
        });
        console.log('signin: ',res);
        const { data } = res;
        if(data.isSuccess){
            const {userid, name,pw} = res.data.userInfo;
            const currForm = document.forms['currentForm'];
            // currForm.userid.value=userid;
            currForm.userid.value= form.userid.value;
            currForm.submit();
            alert('로그인 성공');
            $loading.classList.add('hide');
        } else {
            alert('로그인 실패');
            form.reset();
        }
    } catch {

    }
    
}

//회원정보 수정 : profile.ejs
function edit() {
    const form = document.forms['form'];
    const resultBox = document.querySelector('.resultbox');
    /* if(!form.name.checkValidity() || !form.pw.checkValidity()){
        resultBox.textContent ='아이디 패스워드는 필수값입니다!';
        resultBox.classList.remove('success');
        resultBox.classList.add('error');
        return;
    } */
    if(!form.checkValidity()){
        form.reportValidity();
        resultBox.classList.remove('success');
        resultBox.classList.add('error');
        return;
    }
    axios({
        method: 'patch', 
        url: '/user/profile/edit', 
        data: {
            id: form.id.value,//sql(patchProfileUser)에서 조회용
            name: form.name.value,
            userid: form.userid.value,
            pw: form.pw.value
        }
    }).then((res)=>{
        console.log(res.data);
        alert('정보수정 성공!');
        resultBox.textContent ='';
    });
}
function leave() {
    const form = document.forms['form'];
    if(!confirm('정말 회원 탈퇴 하시겠습니까?')) return;
    axios({
        method: 'delete', 
        url: '/user/profile/delete', 
        data: {
            id: form.id.value,//sql(patchProfileUser)에서 조회용
        }
    }).then((res)=>{
        console.log(res.data);
        alert('회원탈퇴 성공!');
        document.location.href = '/user';
    }).catch((err)=>{
        console.log(err);
    });
}
function signout(){
    location.href='/user/signin'
}