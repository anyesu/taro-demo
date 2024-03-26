<h1 align="center">Welcome to {{ pkg.name }} 👋</h1>
{{ template:badges }}

> {{ template:description }}

<details>
<summary>📖 Table of Contents</summary>
{{ template:toc }}
</details>

{{ load:readmeTemplates/getting-started.md }}

## 👥 Contributing

{{ template:contributors }}

Contributions, issues and feature requests are welcome!  
Feel free to check [issues page]({{ ids.githubFull }}/issues). You can also take a look at the [contributing guide]({{ ids.githubBranch }}/CONTRIBUTING.md).

## 🙏 Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © {{ data.startYear }} [{{ ids.githubUser }}](https://github.com/{{ ids.githubUser }}).  
This project is [{{ pkg.license }}]({{ ids.githubBranch }}/LICENSE) licensed.
