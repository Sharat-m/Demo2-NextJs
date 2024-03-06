import Image from "next/image";
import styles from "./siglePost.module.css";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIRDxIRDxIPEQ8PEQ8PDw8REREPDxAPGBQZGRgUGBgcIS4lHB4rHxgYJjwmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QGhISGjEhISE0NDQxNjE0NDQxNDE2NDQ0NDQ0MTQ0NDQ0NDE0NDExNDE0NDE0MTQ0MTQ0NDQxNDExNP/AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACAwABBAUGB//EAD4QAAIBAwIDBQUDCwMFAAAAAAECAAMREgQhBTFRBhNBYaEycYGRsRQiciMzQkNSYoKSwcLwstHxFTRj0uH/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAtEQACAgECBAQGAgMAAAAAAAAAAQIRAwQSEyEx8CJhcYEUQVGRobEyQiMz4f/aAAwDAQACEQMRAD8A5qrGKsirDVZ02YUEohqsirGqsVlURRGBZFWMVYrHQKrGKstVhhYrHQIWEFhhYapE2VQAWGFjFSMCRWOhQSEFjAkMJJsdCQkMLHBJYSKx0KCQ1SNCQwkVhQpVhhI0JCCSbKoUEhYRoSFhFY6E4S8Y8LLwisdGfGTCaMZRWKx7TPhJhNFpWELHQnGTGaMJO7isKM+MrCasIOEmx0ZsJXdzVhKwhYzLhJNWEqKwo8GojlWMFLzF/lGpR2udj0nZxEcnCYlRHKkNUjFWOwoBUjFSGqRqpFY6ACwlWNVYarJsdC1SGqRq04apFuHQsLDCxgSGFk2VQoJDCRoSEFisdCwkPCGFhYxWOhYWWFjLSwsVhQIWEFhBYarFZVABZYWMCwwsVjoWFl4RgWWFk2OheMrCOtLxisdCcJYSOxhYx2FCMJMI8JJjFYxGEvCPxlYybGJxlFI/GVjFYCMJI60kLA8AojVlIsaqztONEVY1VkRY9VibGkCqRqpCRI5RJsugFSMCQlWMCybGkAqQwsILDCxWVQAWWBDCwgsLCgQsILCCwgsmx0ABCAjFSEEisdCwsK0YFkxisdAhZYWHjLCQ3BRQEILDCwwsVjoWEhARmMILFYCgsPGHjJjFYAYy7QrSQsYOMmMKS0ABxlWh2lSbHQOMEiHaURFY6AtJCtLk2M8GgjVWRVjgs9CzjSIiRqLIqxyrJspItVhqsgEYok2VRYWGBIqxgWTYwAsMLCCwgsVlUCEhhYYWGFk2OharDCwgsICKwoELLCwwsMLFYxYWEFjAssCFgBjIFjcZeMQCwIYEsCEIAUBLtLkisCSSSRWBUkuVCwKtLlXkvFYy5VpJDFYFQTCgmTYyrSSpIrKPHqsaqwUWPVZ3WcyRAsaqwEYZFTswsR+8p5Eeo+Bj1WTuK211LVYSrLCxirFY6IojAspRGCTY6IFmbX6k0woULk+Vi1yBjbw8efpNgE53GuVLzqMt+gNKof7RM8smoScetM0xJOcU+lnQoPkobqN/fGgTDwt9ivTcfQ/0nQAixz3QTKyw2zaKAhiQCFcAEkgAC5JNgB1lbiKKAlkgbkgDqTYTy3Gu1qJlT01nqDZqhF0X8I8ffy988g1Stqnu7PUY+LEm3+02jhk1b5GMsqTpKz62IQnm+ytFqQamWJBXIre4U32IHhfeekmDavk7NtrXXkEJJV5LybEXJKvKhuAKSVeS8VgFKlAy4twiSjCgmKxlQhBl3hYFwZd4N5O4CGCTIWgEyHItIu8kXlLk2OjzKCPQRVOOWei2YUBqaDMt09tLlPPqvxt8wJx9R2m+z2WvSfLqb0v9QsfnPQpGDlbwPMeEUWk7asb3NUnR5ql210x9qnqF8wKbj0e/pNadsNEeb1E/FRqf2gzo1+E6ap7dCgxPjgqt8xYznV+x2jf2UqUz/wCOo30a803Yn1tfkjbl+TTNlLtLoW5aqkPxZp/qAmyjxXSv7Gp0zHoK9O/yvPK6jsBTP5vUMOgemreoI+k4fFeydXTBSalOp3jFUVA5c2FybW5Dr5xqGGXSf37Qt2VdYX6ds+qU2VvZZW/CQ30mLje1JGOwWqmRPRlZPqwny2r2e1aLm1Fu7CliwFgqgXLMf0Rbe5iaFSqCgZn7vOncCoWQ3cAcjbnaKemjKEqnfJ/r1HDUSjOKca5r9+h9M4dqVDAgi19/d4zsprqJc0xWomopCmmKiFwx5Are99jPmFPUMhujEHr1ixRxUsfzeTOlMEBFN7AnxJ3tt85z4NOknFv0OjUZm2pV6n0/ifFaWmXKqwytdUFi7fDwHnPA8a7SVdSSoOFLwReR82Pif82nIr6ipVcs5ZiTuSSSZv0HDv0m2A3sdtupnZHHDErfNnHKcsjpdBXD+GvVbxAvuZ6zRaJUBSkBkLBntcKf6nynAbjQH5LTAOTsX5Jbxsennt747S9rHpVAzqlRN7ogw3J9pT4fHn9OfNxsvKPQ6cPCxq+r77s95w/Simt97tzvuxub3J6zaDONwvtBptTYJUxqH9VUsj36Dwb4EzUeK6cVDSNagKgNineJkDcCx32NyBbznNtcfDT5FuSlzs6F5cWGkyk7gobKiy0mUW4VB3kDRWUmUW4e0deWDFBpYaJyFQ28omAWlEyXIKLLSZRZaQGG4qhmUotBvBLSHIKCJgEyi0WWkbikgryReUuKy6PPK0erTIpjUM9hnHE2I0Ms2JwClrHEMxRS3gCwBIHnYzOhjlaQWjhV9XxamxIoaSolzYU2LED+J1J+UyVO2Gqo/wDcaPDwue9pD5sCJ61Whh5SyR+cE/uhcOXyk/wzylDt5TPt0HHmlRXHqompe1uid1d6dUOoKoz06b4g2JtZjbkPDwnU1PCdLV3qaeixPNgoR/5lsZytR2M0jew1akf3XDr8mBPrHuwPqmvexVnXRp/g1arj+h1NM0mruiuVzGFRSVDA4k4kWNoWs4jojpXSnVoNimSqW+8WWxFsvHYTgajsRUH5rUU36Coj0/hdcvpPO8SC6Ks2n1NSklRlUmy1Kg7th4YrzO48vjK4WGf8ZNvvyJ4uWC8UaR3OK6ikwxQjENe6gG4HgJz6eneqdhZBy6f/AExdTUop2XI/t1AVpj3L4+kCnxCoTfvG5+ypslvwjY/GGnxOEKhz832yc2TdLx8vI7On0iId7s43xAyb5Dl8Zl7RJWWi1SoBS0yW+7kCzEmwL+8kWHnGaXjjLsyKR+79z6bek9Ho+PaKoqrUGLAg/lqYdQ3UHcDmekxktSp3KPLy59/Y3XwzhUZc/NV39zwdOpggRCGesA7YkE4D2Vv0PM+4TOQ4JyRufMfen2KjXSov3GSon7pVlHwHKDU0dFvao0WPhlTU7++0qOsUf6/n/hE9LKS5SPkK1Ryvv0Oxj6NcqCAFIYgtccyN+fOfQdH2Y060QmoQVn5vUZqh+95bzmaTsZTd63eGslMOy6fEqGKLtlysQSD4Dwm/xuF3d992YvS5Ivk1332uZOHdt8UVK1EsFAXOnU+8QOX3WG/8072l7V6Op+sNMn9GspS38Xs+s8lquypGqXT0ajMDS756lRQAgLMqiy874npBq9j9WvsmhU6Y1ChPwYD6zGUdJP8Attv2/Zaeoj1jZ9Go6hXXJGR1/aRg6/MQ858rPBtZROQo11Yfp0zkfmhvNNHtDraFg7OQNsa9Mn1IDeszehcv9c1Lvyspamv5xa79j6XlIWnitJ22P66jfzpN/a3/ALTr6btPpamyu6ta4pujK7HkFFrqSSQLAznlps0OsH7c/wBGsc2OXRneDws5z9MGALv+cexYcwgHsoPIXPxLHxmgNMJOjZRs1ZSi0QGhZTFyFtCJkXeLZhB73pDcNRNJFuZEWzCLyglpDkCiGWgM0WzxbVIrNFAbnJM+ckZew4atHI8xK8YtSe6eambVqRq1Jz1eMFSTRaN61IavMC1Ia1JLRZ0BUhCpMKvDWpM2i0bQ85HGuzel1rLU1FNu9QBVqK5VsQbhSOTC9+Y8ZuFSEHk21zTKcU+pzKXZykr3D1Slt1JGV+uQtt5Wm3/o2mPt0KdQ9XUOfWaA8vvJm+tmu6TVNujn1ezmjf8AUhfwPUpj5K1vSYq3Y/Tn2H1CfxI49Vv6zvZyw8rj5V0kzN4McusUeVbse6NlR1ViOV6bIw/iVv6TrcE0utpuw1VdKlMLZFUl2ZupZlBFh7+flOrnIHhPU5Jx2yp+ysUdNji7ja93Q7KXlFZSZTms3oaD4+PWXlE5y85LYbRuUjG4sdx0O4is5MpFi2iK3DNM+70KLH9rukDfMC8RpuCaanUFSnSC1F3Ul6jBTa1wGJF5tzlZy1lmlSk6fmTwYt3S+w6+8hcCINSJerIVs02GvvLws5gWvvHK8icaDYPZ4vOAzxDVLGEOZSibs5ReZ1faQvMXdi2DWeKZ4mpWAmR9Tc7TWGNstJLqbs5Jh7wypfDZe1HIFSGKkwipDWpPeo8Q3rUjA8wrUjFqRUWjYHhq8xCpCFSQ0Umbg8IVJhFSEKsmi0zcKsMVZg76QVZDiWmdEVYQqzmirCFWQ4GiZ0xUlipOcK8Na8zcGaJo6AqQg8wCr5yu+kOBSZ0u8l5znCvCFaQ4Mo2tUgGpM/eSi8naVRpFaF3swM8Wa9o+HfQV11OpnAZ5gXVQ/tAMXDaHyHtWiKlSJd4o1gOfM7dZrHGRJjTU8Ty538o/TapWXIMpUAnJWDLYc9xPN8a4ljeklrkflG8VBHsjzt9ZyKWudAFQkLe7LdsX8mW9iJ1x0TyQvpZxz1kcc9tXXX176n0VagIBBBB3BBuCJyeJ8Tp0WAbJmY3xW1wt7ZH199pxKPaZlWzUUNthgTTUL0tYzDxPiP2g5FApS+JDE3W42I6+Y85GDQTjPxrl6orLrcbg9j8Xoz22i1SvTV0N1YXFxY87W+YMa1WeT4FqnVSo3p35lt1bxsOh2/wmdOrrek58uj25GkdOHNGWNSZq1Go3mYVd5z6mpmVuIoDbNbnzv6zpjp3VJGc86Tts7/fSTgfbv3l/mEkXwrK+IiKWvDWtOWKsMVZ6Ww8fedUVoa1pyRVhitFwyuIdYVpYrTlCtCFeLhlLIdXvpO+nNFeGK3X/AJi2FKZ0e+litMK6tbWxv5nn7xHLrtrWG3KQ4v6Gia+poFeEK8zHV5HcKbnpF1KoyNv8MW3yK3V0ZvFaEKs5fe+cnfxcMayHVFaGNROR9pk+0yXhspZTsjUCQ6icU6mV9o84vhyuOdn7VaT7bOI+psLk7TN9tu1vDr43lLS38iHqlHlZ6M64RbaoGcBtTAOt85S0v0JerXzO8dRKGqM4P283FuXTrGNqwBud+dvGV8N9SVqou2mds6wzkaniAyYBbEgrnchj7un/ABOdXrF2v0Fhvyii02x6eMebObLrHLlENiTuSSep3Mq8C8l51UcdhZQgYrKUWioVm/TVAhyLbkY2G4A5xtTiI8Lt6CcktKLSHiTds3WolGO2Jqq6122vYHwH+8zFoJMEmUopdDGWSUnbdhZSQLyShWPDwg8zhpeUmh2aBUl5zOGls8KHuNAqQkrdb2mPKXlDaLebDV6SxWmPKXnDah8Rm4VpYrzCGl5xbEVxWdFNRY3P+GW1a53YXPvnNzkzi4aL47OiasrvphFQ9YOUOGDznQNcdYt9TY7b+fKY8pMo+GiXnkzYdUPOBU1FxtcTNlJlHsRLyyYbOTzMmUXeVeUkZ7hpc25wbwLyXjoNzDylXg3kvChWXeS8G8l4UKwryrwbyrxgHePp0FK5M3PfEbmZbw6dfEWxBHQ+HukZFJrwm+mlijP/ACq1Xn19Fzf6+o2vTQLdcvC97W9JlvDq1y3P5bt9YomEIyrxPmGonjlO8apd8yEyEwSZRMqjAvKXF3lwoAg0vKSSIC7yZSSQAsGEDJJGBLy8pJIIRWULKVJHQy7yZSSQoCZSZSSQQEvLvJJACXkvJJACXlEypICJeS8kkAJeSSSMCryXkkiAq8l5JIwITBLSSRACTKJkkjAomVeSSICrySSQA//Z"
          alt=""
          fill
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src="data:image/jpeg;base64,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"
            alt=""
            width={50}
            height={50}
          />

          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Sharat</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.02.2023</span>
          </div>
        </div>
        <div className={styles.content}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe illo maxime nulla odio fuga dolor laudantium amet obcaecati totam nam placeat, expedita, quidem laborum voluptatum animi aspernatur quo repellendus explicabo.</div>
      </div>
    </div>
  );
};
export default SinglePostPage;