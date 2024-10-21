import React, { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "../App.css";

function Brend() {
  // Slayderni boshqarish uchun referenslar
  const sliderRef = useRef(null);

  // Left va Right tugmalari bosilganda slayderni surish funksiyalari
  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -300, // Chapga surish miqdori
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 300, // O'ngga surish miqdori
      behavior: "smooth",
    });
  };

  return (
    <div className="mb-10">
      {/* Бренды qismi */}
      <div className="flex items-center gap-3 justify-between">
        <h2 className="text-xl font-semibold mb-6">Бренды</h2>
        <div className="flex items-center gap-3">
          <button className="crcle_menu" onClick={scrollLeft}>
            <FiChevronLeft />
          </button>
          <button className="crcle_menu" onClick={scrollRight}>
            <FiChevronRight />
          </button>
        </div>
      </div>

      {/* Slayder qismi */}
      <div
        ref={sliderRef}
        className="flex gap-20 overflow-x-auto scrollbar-hide justify-center" // Scrollbar yashirish uchun class qo'shildi
        style={{
          scrollBehavior: "smooth",
        }} // Yaxshi animatsiya uchun smooth scroll
      >
        {[
          "https://s3-alpha-sig.figma.com/img/e970/ed13/225cd2badea6904b267646bf6117c85c?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YtBCwQhu3-bZStOv7IBrtYvPP~QHvZpOadjXTaIgWEbCk4UM9vNfcnGTp~JWnjvyEVxArOsWwJkYtgdaGTRC2rTMBQbiYDKJ2yV-dXWm5AWxb5otDyxlJiIYN2DBlwhhb-s6D09uso6aDzxC70rclr1xmlaEt9cBTv~3~6ODhhEkr02SbEkqa1r1jpF1a3VaJ0ZK~HvUYzbMHyBwPsrGvfpkHLVOCL-V6C1ojUKhJVCWjzMEgNy6~RsVi3QMyzu7loruuQuAez-Si9gsg4~ysdG9DbxZ6r3zXNdhemF~cvgXeJIuWx3vpSSy4n-YP2NKR6kYEDG6dymS6Z-x6fJj3w__",
          "https://s3-alpha-sig.figma.com/img/0906/86a3/fd2469fab70ea366f1b0b5cf22b735c4?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BHgvwFs1vXmfVL8LBqVR6~OOkFF1JGtf7hdXgdamFYpeeKkYQTdkkigz48c27bfVVUVoqxLVsukf4dmrz7E3MC0~S0XIrG4LC8NtuQu1lhluLcNEIx3WTLeHhEcjF1OsaIzkbbcQh5CNBamczkjAB-HqCRLOEPZA5g-AEF4GwioY83Nnv~K9kQxvp5OD~MySTh2nERBsKUOZbsfxxkDDq-F2O2eJeZ0DZpx1AmVif9dmYg5rlo1tmuJXzH2jjw4YWbe9~VzBo9YRS-oKyvcnZgYZ-fDSpP-zSLDpfnkQnG1W85N4mk~3~7PjDjguK4ou24K~2iqXojmeQb7DDVCHXg__",
          "https://s3-alpha-sig.figma.com/img/a89a/64d0/5f1e1a701a113a7e6cfedef0aa365c3b?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YLZhNtSQNzBPAZTi7VD31rRJHXNDxqPe7k5plUoe6mukrL5xJXw-xPDC1GivWK73SQ9zZjKrlaWWOelEeoTRacaPVKpl0jhNO-Nwo4RLy7bEptkehwX3-1vVfgdC9jlJn0dEvh5ib1RRvB9SySd0fSyWq0OZj6Ax1AM2-FXFms8iTcrVE~LZNcDVZOQj8F-2t0DhhwTUKPHHC3CTXo6z~FonMD7-kEEZ51Fq04tU9LSMj3juWnZH-Ar8qrbiPB5TfuzaQooJBn9H1YcEKD7upKc4T9GUPmGUvZLQ2XX2K-G~4Bbo-GLrtW3pXRyA9mg1ALbp1wFu09TxlZUVTLVdEg__",
          "https://s3-alpha-sig.figma.com/img/4ea5/fabb/9beb4d8fd8b766cbfe6cabff18cb5063?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=djYkACLug9pwHmTo6e9c3ZlqaSGknXS2XRyAWFjY8FKAb33DJ59~NV3vTSDILmYVR0gGNkVb4GOYlmYexmSxgNEDpjgkphYgsoLAewjFPCCWQEvseMngiyFKf5urzeGwuQwoKqTETKqACf33hhkHAyPdB5Mxz3hdMoSRB5eRckLCutxhJmba7Yt9X5lKyupJYVXT3U2d1hRwfYzdJcTIeh4O8VRUYbAwO2UNFViYoEKz5n7GIsbXWWVK~pAVxOeOemV4BvaDSCWFIRExKW8bIoEJhnsB4h9ueUvZv0tSpDH-jq3uZLGCfCo4FCOOUa~A4zUOYdOsPrqpu1SzYz-HZg__",
          "https://s3-alpha-sig.figma.com/img/15de/f77f/66fdc6b7ba9680e326230de6d9fe118c?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mkXe6DirlbinFb4uw6xK4rsDPky8XclG7mCbyQZ9V1AIJNwzoRxSVlMFkcevuNcas-MMQ3AM9~-J0Jx969YPbgQfLPwRRBgCOqr9m3PbCwJKVEPMwGN0k-neFyWfE19Vh-Qqq3QlQcNsyEt9w-T5oYQF37k9B7d9CI5zJvrHncdJyoV~S-CoISG~dUso48Mpdx9jRR3OS-yn5Ad9P6KIRY-ns9FbdbUzsfARfMsb5d1pPfeuGlQxOLfo6mMKlnJoy92aI3~jhfuwyVTb~h2nxmOqtXp9nIwQt5zPE7tHv2tsGDWMQ9LaLkTk3RaKKqtL5go~KN2YYjiLqZPgpXsfWg__",
          "https://s3-alpha-sig.figma.com/img/e970/ed13/225cd2badea6904b267646bf6117c85c?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YtBCwQhu3-bZStOv7IBrtYvPP~QHvZpOadjXTaIgWEbCk4UM9vNfcnGTp~JWnjvyEVxArOsWwJkYtgdaGTRC2rTMBQbiYDKJ2yV-dXWm5AWxb5otDyxlJiIYN2DBlwhhb-s6D09uso6aDzxC70rclr1xmlaEt9cBTv~3~6ODhhEkr02SbEkqa1r1jpF1a3VaJ0ZK~HvUYzbMHyBwPsrGvfpkHLVOCL-V6C1ojUKhJVCWjzMEgNy6~RsVi3QMyzu7loruuQuAez-Si9gsg4~ysdG9DbxZ6r3zXNdhemF~cvgXeJIuWx3vpSSy4n-YP2NKR6kYEDG6dymS6Z-x6fJj3w__",
          "https://s3-alpha-sig.figma.com/img/0906/86a3/fd2469fab70ea366f1b0b5cf22b735c4?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BHgvwFs1vXmfVL8LBqVR6~OOkFF1JGtf7hdXgdamFYpeeKkYQTdkkigz48c27bfVVUVoqxLVsukf4dmrz7E3MC0~S0XIrG4LC8NtuQu1lhluLcNEIx3WTLeHhEcjF1OsaIzkbbcQh5CNBamczkjAB-HqCRLOEPZA5g-AEF4GwioY83Nnv~K9kQxvp5OD~MySTh2nERBsKUOZbsfxxkDDq-F2O2eJeZ0DZpx1AmVif9dmYg5rlo1tmuJXzH2jjw4YWbe9~VzBo9YRS-oKyvcnZgYZ-fDSpP-zSLDpfnkQnG1W85N4mk~3~7PjDjguK4ou24K~2iqXojmeQb7DDVCHXg__",
          "https://s3-alpha-sig.figma.com/img/a89a/64d0/5f1e1a701a113a7e6cfedef0aa365c3b?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YLZhNtSQNzBPAZTi7VD31rRJHXNDxqPe7k5plUoe6mukrL5xJXw-xPDC1GivWK73SQ9zZjKrlaWWOelEeoTRacaPVKpl0jhNO-Nwo4RLy7bEptkehwX3-1vVfgdC9jlJn0dEvh5ib1RRvB9SySd0fSyWq0OZj6Ax1AM2-FXFms8iTcrVE~LZNcDVZOQj8F-2t0DhhwTUKPHHC3CTXo6z~FonMD7-kEEZ51Fq04tU9LSMj3juWnZH-Ar8qrbiPB5TfuzaQooJBn9H1YcEKD7upKc4T9GUPmGUvZLQ2XX2K-G~4Bbo-GLrtW3pXRyA9mg1ALbp1wFu09TxlZUVTLVdEg__",
          "https://s3-alpha-sig.figma.com/img/4ea5/fabb/9beb4d8fd8b766cbfe6cabff18cb5063?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=djYkACLug9pwHmTo6e9c3ZlqaSGknXS2XRyAWFjY8FKAb33DJ59~NV3vTSDILmYVR0gGNkVb4GOYlmYexmSxgNEDpjgkphYgsoLAewjFPCCWQEvseMngiyFKf5urzeGwuQwoKqTETKqACf33hhkHAyPdB5Mxz3hdMoSRB5eRckLCutxhJmba7Yt9X5lKyupJYVXT3U2d1hRwfYzdJcTIeh4O8VRUYbAwO2UNFViYoEKz5n7GIsbXWWVK~pAVxOeOemV4BvaDSCWFIRExKW8bIoEJhnsB4h9ueUvZv0tSpDH-jq3uZLGCfCo4FCOOUa~A4zUOYdOsPrqpu1SzYz-HZg__",
          "https://s3-alpha-sig.figma.com/img/15de/f77f/66fdc6b7ba9680e326230de6d9fe118c?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mkXe6DirlbinFb4uw6xK4rsDPky8XclG7mCbyQZ9V1AIJNwzoRxSVlMFkcevuNcas-MMQ3AM9~-J0Jx969YPbgQfLPwRRBgCOqr9m3PbCwJKVEPMwGN0k-neFyWfE19Vh-Qqq3QlQcNsyEt9w-T5oYQF37k9B7d9CI5zJvrHncdJyoV~S-CoISG~dUso48Mpdx9jRR3OS-yn5Ad9P6KIRY-ns9FbdbUzsfARfMsb5d1pPfeuGlQxOLfo6mMKlnJoy92aI3~jhfuwyVTb~h2nxmOqtXp9nIwQt5zPE7tHv2tsGDWMQ9LaLkTk3RaKKqtL5go~KN2YYjiLqZPgpXsfWg__",
        ].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Brend ${index + 1}`}
            className="cursor-pointer h-40 w-auto object-contain"
          />
        ))}
      </div>
    </div>
  );
}

export default Brend;
