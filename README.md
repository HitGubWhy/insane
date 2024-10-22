# insane
### My name is PoopyPants
![my photo](https://www.breatheazy.co.uk/wp-content/uploads/2023/09/Untitled-design-35-1080x675.png)
Im JS developer and this is my code:
```javascript
$('input').on('change', function(){
    let username = $(this).val()
    alert(username)
    $.ajax(`http://api.github.com/users/${username}`, {
        dataType: 'json',
        success: function (result) {
            console.log(result)
            $('#result').html(`
                <h1>${result.name}</h1>
                <img src="${result.avatar_url}" alt="">
                <a href="${result.html_url}">Link profile</a>
            `)
        },
        error: function(xhr) {
            console.log(xhr.statusText)
        }
    })
    
})
```
This is list:
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://katherineoelsner.com/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/)

