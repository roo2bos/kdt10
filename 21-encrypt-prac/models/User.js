// TODO: User 모델 정의
const UserModel = (sequelize, DataTypes) => {
	const User = sequelize.define(
		'user4',
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
			},
			pw: {
				type: DataTypes.STRING(255),
				allowNull: false,
			},
			name: {
				type: DataTypes.STRING(15),
				allowNull: false,
			},
			userid: {
				type: DataTypes.STRING(15),
				allowNull: false,
			},
		},
		{
			freezeTableName: true,
		}
	);
	return User;
};

module.exports = UserModel;
