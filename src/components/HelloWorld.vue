<template>
	<div class="hello">
		<mu-container>
		  <mu-button class="demo-button" color="primary" @click="alert()">Alert</mu-button>
		  <mu-button class="demo-button" color="secondary" @click="confirm()">Confirm</mu-button>
		  <mu-button class="demo-button" color="teal" @click="prompt()">Prompt</mu-button>
		</mu-container>
	</div>
</template>

<script>
export default {
  methods: {
    alert () {
      this.$alert('Hello World', '提示', {
        okLabel: '知道了'
      }).then(() => {
        this.$toast.message('提示信息');
      });
    },
    confirm () {
      this.$confirm('确定要删除？', '提示', {
        type: 'warning'
      }).then(({ result }) => {
		  console.log(result);
        if (result) {
          this.$toast.message('点击了确定');
        } else {
          this.$toast.message('点击了取消');
        }
      });
    },
    prompt () {
      this.$prompt('请输入邮箱', '提示', {
        validator (value) {
          return {
            valid: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/.test(value),
            message: '请输入正确邮箱格式'
          }
        }
      }).then(({ result, value }) => {
		  console.log(result);
        if (result) {
          this.$toast.message('你输入的邮箱：' + value);
        } else {
          this.$toast.message('点击了取消');
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h3 {
		margin: 40px 0 0;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		display: inline-block;
		margin: 0 10px;
	}

	a {
		color: #42b983;
	}

	.demo-list-wrap {
		width: 100%;
		max-width: 360px;
	}
</style>
