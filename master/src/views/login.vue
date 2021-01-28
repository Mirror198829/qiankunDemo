<template>
    <div>
        <h1>登录页</h1>
        <div style="width:500px;border:1px solid #ccc;padding:20px;margin:0 auto">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="用户名" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="goToHome('ruleForm')">登陆</el-button>
                </el-form-item>
            </el-form>
        </div>

    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                ruleForm: {
                    name: ''
                },
                rules: {
                    name: [{
                        required: true,
                        message: '请输入活动名称',
                        trigger: 'blur'
                    }, ]
                }
            }
        },
        components: {

        },
        methods: {
            goToHome(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        let timeTemp = (new Date()).getTime()
                        let obj = {
                            token: `${timeTemp}`,
                            userName: this.ruleForm.name
                        }
                        this.$act.setGlobalState(obj)
                        this.$router.push('summary')
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });

            }
        },
        mounted() {

        },
        created() {}
    }
</script>

<style>

</style>
<style scoped>

</style>