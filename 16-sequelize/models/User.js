const User = (Sequelize , DataTypes) => {
    // Sequelize: models/index.js 에서의 sequelize
    // DataTypes: models/index.js 에서의 Sequelize
    //const model = Sequelize.define() 로 하려면 끝에 return model; 해줘야함.

    return Sequelize.define(
        'user',// params 1 모델 이름 설정
        {
            //'id', 'int', 'NO', 'PRI', NULL, 'auto_increment'
            id: {
                type: DataTypes.INTEGER,
                allowNull:false,
                primaryKey: true,
                autoIncrement:true
            },
            userid : {
                type: DataTypes.STRING(20),
                allowNull: false
            },
            name:{
                type: DataTypes.STRING(10),
                allowNull: false
            },
            pw:{
                type: DataTypes.STRING(20),
                allowNull: false
            }
        },// params 2 컬럼 정의 
        {
            tableName: 'user3',//실제 db 테이블명을 명시
            freezeTableName: true,// 첫번째 인자로 넘겨준 모델 이름을 그대로 테이블 이름으로 고정
            // 시퀄라이즈는 기본적으로 테이블 이름을 모델 + s로 가져가요
            // charset, collate 값이 있는데 db 정의할 때 한글 인코딩 가능하도록 만들어뒀기 때문에 따로 설정 필요X
            timestamps: false,// 데이터가 추가 되고 수정된 시간을 자동으르 컬럼으로 만들어서 기록함.

        }// params 3 모델 옵션정의
    );
}

module.exports = User;