import React from "react";
import { FiChevronRight } from "react-icons/fi";

function Slider() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url("https://s3-alpha-sig.figma.com/img/4d64/af62/17cfd261e93e5d91e543dcc8193f215c?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kFFlWySIesezYBtE9V-9-cEkwXcU9cK-~agG1rzyPBILKMP2MmvTwxOorU06xV82iOVakYYjrrh7KE5jSvCfpDiFSRVtZ~pHUoXI2Gm8W9zhjD98TSh0x4ZAZ2Ue686FFg1oovC8Qb6ydk8hm5D0oeSOQ8870kHW28QbzPJHN1QD-TBJJOIYrmP4utlATw9VsTGwj7NfBrcx45kOpvXTsfQUNJ71Knna5ZLA9On2G7ojlChiLf-kAqEO9bXHvM4O~2eebupWIvQ5cdAtPY6gaZcOo5GE0SB1ad7gVo36dHUF1RznlwcFgnytM11NnP-UzLn7Dk3P7M2LDRiwsfybUA__")`,
          backgroundSize: "100% 130%",
          backgroundPosition: "center",
          height: "400px",
          width: "100%",
          borderRadius: "10px",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
          overflow: "hidden",
          padding: "40px",
        }}
        className="banner-section mt-6"
      >
        <div className="text-section mt-4 flex items-center justify-between">
          <div className=" text-white ">
            <h1 className="text-3xl font-bold">Пеноплекс Основа</h1>
            <p
              style={{
                maxWidth: "450px",
              }}
              className="mt-2"
            >
              Пеноплэкс» — российская компания, производитель тепло- и
              гидроизоляционных, а также декоративно-отделочных материалов на
              основе полимеров, основной вид продукции — теплоизоляционные плиты
              из экструзионного пенополистирола
            </p>
          </div>
          <img
            style={{
              width: "20%",
              height: "auto",
              objectFit: "cover",
            }}
            src="https://s3-alpha-sig.figma.com/img/4d60/710e/dbcbd94027f160e8706d21973d48946e?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UZFcG-oozH4QjohLCApb-PLyNGxh3Lr4iBZUlUnkcy3Xr8UrOFgMR2guCuoTnxJDWEAdtxuDCmi9kFsb5cTipxcCde~j9nbDvYP0AJEgzOKq0a3diX-o8N52bwypMrvAWHqbIy94oq98ho5wezOaY6FoOYQccb-vMsxTwOvUfLwm04T9HnvGdYhf7ot~NgHUCskGxO-DvfLlVSwnNIUFkRHuzu8mOYLh~h-MK4CYNXO2l60f6zfBz3eH6MReV~RJWx9fzJN4iNtZ~-G8xul9-IsGKRXTD03hCL5T0W6yf22OhYky5Wz7sqq49YnSa9n20ZLun2Qcx7YIgqznnFyt1w__"
            alt=""
          />
        </div>
      </div>
      <div className="categories-section mt-8">
        <div className=" flex justify-between items-center">
          <h2 className="text-2xl font-bold mb-4">Категории</h2>
          <a
            style={{
              display: "flex",
              gap: "5px",
              alignItems: "center",
            }}
            href="#"
            className="text-blue-600"
          >
            Все категории
            <FiChevronRight />
          </a>
        </div>

        <div className="grid grid-cols-5 gap-6 mt-14">
          <div className="category-card text-center">
            <img
              src="https://s3-alpha-sig.figma.com/img/6986/488b/b36e34a20bec34982621dea8454c0bf3?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VmA0iud7nEPQ7VUyVh2CmG0PgGbzNUKKa6BiIZRSgmk0rl89E4dGjkhGWnpEAGT6OqBtK4KYhAUMt~LezPsB5gFvjy35G~fX8P5hcyEMN-T5FUC2EKdaucCybgs~Q4pkTk9WZNzMRnmTjdSABwiQRKSj1pwx5h-YaghcTLII1uUFRdbrM3KB8po6vtJSvWIOstWucB7IVCaHU-shC0NHvwJjIGsVkvgydReUOi3azLVdj~tBXhiibcWHZZq8kW-0WlJ1T2EZ3ax6yavVgPlahzNSbd44MvCb9EF7TEmUsn3MnzaWnjqR~R0Yop8T-HYQgHOzg9HGyAx-NGGhh2w0dA__"
              alt="Сухи смеси"
              className="mx-auto w-16 h-16"
            />
            <p className="mt-2">Сухи смеси</p>
          </div>
          <div className="category-card text-center">
            <img
              src="https://s3-alpha-sig.figma.com/img/8130/a716/c937aef44da3714af8ae2737d16f3c34?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UHR70EDpOsn7P72CQIbeIOKLwfxYU~Z5XetZWX~Tw5Tq9HihgAsaGGs2ATfFYaLtANE8F3fM~Bl0arFGgD4QK6cNaikZR-gRzUjCP43mFa6bPMyYgJQ6DTis6OH-Js9jR2ieDdaHrCdrqMP~8dztSqciSss8ozGL7E9Ro9ZnWrmXN6Ys8ralS93NtlJzk6VhejP1FzljQ4ikAHxRAKr7LIOGnGe33RcyIwEO5Bjel4aSyzPnmiqUIkj2V0VwUwt9fy82VOC-waJl7NUCYrs11XkO80Ex-BUpCvc~IcL8WkAROV7YTsR0doQEXusRI4jMCX19BDI52tu6wGrkOZbV4A__"
              alt="Хоз товары"
              className="mx-auto w-16 h-16"
            />
            <p className="mt-2">Хоз товары</p>
          </div>
          <div className="category-card text-center">
            <img
              src="https://s3-alpha-sig.figma.com/img/3788/9aca/adec2da6d4dea69418fe1cc2ed134eda?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VpVnO2~~J8F3jpJend7KDCP4UyAT0rGbdCDAPqapooXYL1Ap6SbxNgsP2c65aX4pcU7nHmxpV-QipuMQEDvyviZaVHGQeLM-s1Bk4D3ffYYfx~je94gdWxaBrOlxEZENK38whG4sDqAE5bCMM6oQxmfo5-XmuOCTF6kLtwbzACSzpd5Aoz8qObYONw8bftK9a~J6z4NgD~nJDcFMviunHZW9x2-trV-Ip6VjqPKj1iBpxPu-AlLe3PTHRgbGzEVn-Vc-huWId-DWRC3Ph4MMnvQIfTerEAwgSlQCaTpEsP4AW-nZmtSHonMkGBV8pKc1HrsHfWxJssg6BeSTf~0t~g__"
              alt="Лакокрасочная материалы"
              className="mx-auto w-16 h-16"
            />
            <p className="mt-2">Лакокрасочная материалы</p>
          </div>
          <div className="category-card text-center">
            <img
              src="https://s3-alpha-sig.figma.com/img/8b81/0f9a/82adc1f1cf7295770c8c4361a35018f4?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AEyDHJB9Zkk1QDT5v2zhBIPWLzhtBp8a3bGu0Oi~zPk32VUPbsIEK2sDyPanQmPJGSV1r6RupL1jDDYUTGzgYkMrUqZbLgHXOdNcjQlU9EiLrXRwNZIg1lnE8x6l7KpUJ75XCfoaV4xIDMHURpnaMWNU53a2xp9JjWIS3CxvkA6iBlSFPMh8qjndiailT1D1XXWsoyskzy9jMZbkTUcpD2~Dnu-9F-cya-hBGy~dAxBD9YomdtXhd~5bZCtOa9WWsPs5hgJzy1xpZ-wQlrWWPLKroCB0TOHS7ov1yV7zbG-P8~egSsKsfPSMe-uO9uLVYKQgWJB7uLX1tibMfQmEVg__"
              alt="Изоляционные материалы"
              className="mx-auto w-16 h-16"
            />
            <p className="mt-2">Изоляционные материалы</p>
          </div>
          <div className="category-card text-center">
            <img
              src="https://s3-alpha-sig.figma.com/img/edf5/b6cb/c450f91de4480409ea22f66c2f47ff4b?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GuZDh5JEuWoWa4PtQjFLVtc5CzLZk7jsufozx-Ei-k86mXfOOFjgr2DDymLaCDgpQru-Ez4GNFLoMiHpvE9LD9pKVzUv9Bq6fsiM6TEIv5kIpZHaKDcstRmXmwjmV6gIEuUtvr17nT9LrwCTZo6BSguqCsAmSq-2WKbzbtEHMkI10HneXhkMaBQiIAsDWGyt3Yt-3Sc-boENaBHiYUKFwzWSBDGtW53RN-YenB51a3g541usXMcXDZM9cimQcMeaU7X1yoXkRy-AMxHsRzNfQH4MjvSfgmP7-~Ik1Hrwyr8uHnJMF-T8cdeQqUSdJ2bvcd~46i07ANckTLm8buFe9w__"
              alt="Саморезы"
              className="mx-auto w-16 h-16"
            />
            <p className="mt-2">Саморезы</p>
          </div>
        </div>

        {/* novayte na sayte */}
        <div className=" flex justify-between items-center mt-20">
          <h2 className="text-2xl font-bold mb-4">Новинки на сайте</h2>
          <a
            style={{
              display: "flex",
              gap: "5px",
              alignItems: "center",
            }}
            href="#"
            className="text-blue-600"
          >
            Смотреть все
            <FiChevronRight />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Slider;
