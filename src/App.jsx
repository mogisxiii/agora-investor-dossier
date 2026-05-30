import { useEffect, useMemo, useState } from "react";
import "./App.css";

const LANGS = [
  { key: "vi", label: "VI" },
  { key: "en", label: "EN" },
  { key: "zh", label: "中文" },
];

const content = {
  vi: {
    metaTitle: "Agora City Investor Dossier",
    navBadge: "Investor Dossier Demo",
    navCta: "Xem Khu hồ sơ pháp lý",
    nav: {
      summary: "Tóm tắt",
      checklist: "Checklist",
      legal: "Pháp lý",
      thesis: "Luận điểm",
      products: "Sản phẩm",
    },
    hero: {
      eyebrow: "Agora City Investor Dossier Demo",
      title: "Hồ sơ thẩm định đầu tư Agora City.",
      lead: "Dành cho nhà đầu tư muốn kiểm tra pháp lý, sổ riêng, khả năng sang tên, hạ tầng hiện hữu và động lực tăng trưởng trước khi quyết định.",
      principle: "Nguyên tắc của hồ sơ này:",
      warning:
        "Không mua vì lời quảng cáo. Chỉ ra quyết định sau khi kiểm tra được hồ sơ, bằng chứng và lý do bảo vệ giá trị tài sản.",
      primary: "Bắt đầu kiểm tra hồ sơ",
      secondary: "Xem luận điểm đầu tư",
      mediaLabel: "Core Advantage",
      mediaText: "Pháp lý minh bạch là ưu thế cạnh tranh tuyệt đối.",
    },
    executiveStats: [
      ["127ha", "Quy mô đại đô thị", "Quỹ đất lớn, đủ điều kiện hình thành một trung tâm đô thị mới."],
      ["2.011", "Sản phẩm toàn khu", "Cơ cấu gồm shophouse, nhà phố, biệt thự và căn hộ."],
      ["100%", "Nền đất có sổ riêng", "Điểm then chốt để nhà đầu tư kiểm tra trước khi xuống tiền."],
      ["48+", "Tiện ích nội khu", "Tạo nền tảng cho an cư, kinh doanh và khai thác dòng tiền."],
    ],
    intro: {
      index: "01",
      kicker: "Market Problem",
      title: "Nhà đầu tư đất nền không thiếu dự án để xem. Họ thiếu một tài sản đủ rõ để xuống tiền.",
      p1: "Trong thị trường bất động sản, rất nhiều landing page chỉ cố chứng minh dự án đẹp. Nhưng nhà đầu tư nghiêm túc thường không ra quyết định vì phối cảnh. Họ ra quyết định khi rủi ro pháp lý được làm rõ, hồ sơ được trình bày đầy đủ và luận điểm đầu tư đủ thuyết phục.",
      p2: "Vì vậy, Agora City không nên được trình bày như một trang bán hàng. Agora cần được trình bày như một bộ hồ sơ thẩm định tài sản: có danh mục, có hồ sơ đầu tư, có bằng chứng, có luận điểm đầu tư và có cơ chế giúp khách tự kiểm tra.",
      riskTitle: "5 lý do nhà đầu tư thường mất tiền khi mua đất nền",
      risks: [
        "Không kiểm tra được sổ riêng và khả năng sang tên.",
        "Mua theo lời hứa tiện ích thay vì bằng chứng hiện trạng.",
        "Không hiểu quy hoạch, lộ giới và điều kiện xây dựng.",
        "Không xác định được ai sẽ tạo lực cầu thuê hoặc mua lại.",
        "Đánh giá dự án bằng cảm xúc thay vì hồ sơ pháp lý.",
      ],
    },
    checklist: {
      index: "02",
      kicker: "Investor Checklist",
      title: "7 câu hỏi nhà đầu tư phải trả lời trước khi mua đất Agora City.",
      desc: "Đây là phần quan trọng nhất của landing page. Thay vì thúc khách để lại số điện thoại ngay, website phải giúp khách tự kiểm tra các rủi ro lớn nhất trước. Khi câu trả lời rõ, nhu cầu tư vấn sẽ tự nhiên hơn.",
      pain: "Nỗi lo của khách:",
      answer: "Agora trả lời:",
      scoreLabel: "Investor Readiness Score",
      scoreTitle: "6 / 6 nhóm tiêu chí có cơ sở trình bày",
      scoreDesc:
        "Mục tiêu không phải là nói khách “hãy tin”. Mục tiêu là cho khách đủ dữ liệu để tự thấy: Agora có nhiều lớp kiểm chứng hơn một dự án đất nền thông thường.",
      items: [
        {
          code: "RISK-01",
          question: "Đất có sổ riêng chưa?",
          investorPain: "Nhà đầu tư sợ nhất là mua tài sản không đứng tên được hoặc phải chờ pháp lý kéo dài.",
          agoraAnswer: "Agora City được định vị với 100% nền đất có sổ riêng, giúp người mua có cơ sở kiểm tra trước khi giao dịch.",
          status: "Có cơ sở kiểm chứng",
        },
        {
          code: "RISK-02",
          question: "Có thể sang tên được không?",
          investorPain: "Một tài sản không thể sang tên sẽ làm giảm thanh khoản và tăng rủi ro khi cần bán lại.",
          agoraAnswer: "Catalogue ghi khách hàng giao dịch được sang tên ngay trên sổ.",
          status: "Ưu tiên kiểm tra hồ sơ",
        },
        {
          code: "RISK-03",
          question: "Có được phép xây dựng không?",
          investorPain: "Nhiều nhà đầu tư mua đất nhưng không khai thác được vì vướng quy định xây dựng.",
          agoraAnswer: "Catalogue ghi 100% nền đất được cấp phép xây dựng.",
          status: "Có thông tin cấp phép",
        },
        {
          code: "RISK-04",
          question: "Hạ tầng có hiện hữu không?",
          investorPain: "Nhà đầu tư không muốn mua một lời hứa. Họ cần thấy đường, tiện ích, công trình và khả năng vận hành thật.",
          agoraAnswer: "Dự án có trung tâm hành chính 5ha đã hoàn thành, đại lộ 818 và hệ thống tiện ích đang được triển khai.",
          status: "Có bằng chứng hiện trạng",
        },
        {
          code: "RISK-05",
          question: "Ai sẽ tạo nhu cầu mua lại hoặc thuê?",
          investorPain: "Nếu không có lực cầu thật, đất nền có thể tăng chậm hoặc khó thanh khoản.",
          agoraAnswer: "Agora nằm gần cụm khoảng 30 KCN, trung tâm hành chính và các trục kết nối liên vùng.",
          status: "Có động lực cầu",
        },
        {
          code: "RISK-06",
          question: "Dự án có đủ lý do để giữ dài hạn không?",
          investorPain: "Nhà đầu tư cần một tài sản có nhiều lớp bảo vệ giá trị, không chỉ trông chờ sóng thị trường.",
          agoraAnswer: "Pháp lý, hành chính, công nghiệp, thương mại, giao thông và ba mặt giáp sông tạo thành luận điểm đầu tư dài hạn.",
          status: "Có luận điểm đầu tư",
        },
      ],
    },
    legal: {
      index: "01",
      kicker: "Pháp lý là điểm then chốt đầu tư",
      title: "Trước khi xem vị trí hay giá bán, hãy kiểm tra bộ hồ sơ pháp lý của Agora City.",
      desc: "Lợi thế lớn nhất của Agora City không chỉ nằm ở quy mô 127ha hay tiện ích nội khu, mà ở khả năng giúp nhà đầu tư kiểm chứng pháp lý ngay từ đầu: sổ riêng, quy hoạch, nghĩa vụ tài chính, cấp phép xây dựng, điều kiện giao dịch và hồ sơ chủ đầu tư.",
      useLabel: "Nhà đầu tư dùng để:",
      request: "Yêu cầu xem hồ sơ",
      items: [
        {
          code: "LEGAL-01",
          title: "Hồ sơ sổ riêng",
          img: "/4.jpg",
          summary: "Tập hợp tài liệu giúp nhà đầu tư kiểm tra quyền sử dụng đất và khả năng đứng tên tài sản.",
          documents: ["Mẫu giấy chứng nhận quyền sử dụng đất", "Danh mục nền/sản phẩm có pháp lý riêng", "Thông tin điều kiện giao dịch từng sản phẩm"],
          investorUse: "Dùng để trả lời câu hỏi quan trọng nhất: Tôi mua xong có đứng tên được không?",
        },
        {
          code: "LEGAL-02",
          title: "Hồ sơ quy hoạch",
          img: "/5.jpg",
          summary: "Nhóm tài liệu giúp kiểm tra quy hoạch tổng thể, lộ giới, phân khu và công năng sử dụng đất.",
          documents: ["Bản đồ quy hoạch tổng mặt bằng", "Thông tin đường 818 lộ giới 40m", "Thông tin đường phía Bắc thị trấn lộ giới 24m"],
          investorUse: "Dùng để đánh giá đất có nằm đúng vị trí, đúng chức năng và đúng định hướng đô thị không.",
        },
        {
          code: "LEGAL-03",
          title: "Hồ sơ nghĩa vụ tài chính",
          img: "/6.jpg",
          summary: "Nhóm tài liệu thể hiện dự án đã hoàn thành các nghĩa vụ quan trọng liên quan đến đất đai.",
          documents: ["Xác nhận hoàn thành nghĩa vụ tài chính", "Thông tin liên quan tiền sử dụng đất", "Biên mục hồ sơ phục vụ đối chiếu khi tư vấn"],
          investorUse: "Dùng để giảm rủi ro mua tài sản còn tồn đọng nghĩa vụ tài chính.",
        },
        {
          code: "LEGAL-04",
          title: "Hồ sơ cấp phép xây dựng",
          img: "/7.jpg",
          summary: "Nhóm tài liệu giúp nhà đầu tư kiểm tra khả năng triển khai xây dựng, kinh doanh hoặc khai thác tài sản.",
          documents: ["Thông tin cấp phép xây dựng", "Quy chuẩn xây dựng theo từng loại sản phẩm", "Mặt bằng công năng shophouse/nhà phố"],
          investorUse: "Dùng để trả lời câu hỏi: Mua xong có thể xây, vận hành hoặc khai thác được không?",
        },
        {
          code: "LEGAL-05",
          title: "Hồ sơ điều kiện giao dịch",
          img: "/8.jpg",
          summary: "Bộ hồ sơ giải thích quy trình đặt chỗ, ký hợp đồng, thanh toán, công chứng và sang tên.",
          documents: ["Quy trình giao dịch", "Điều kiện ký hợp đồng", "Các mốc thanh toán và bàn giao hồ sơ"],
          investorUse: "Dùng để giúp nhà đầu tư biết chính xác tiền đi đến đâu, giấy tờ đi đến đâu.",
        },
        {
          code: "LEGAL-06",
          title: "Hồ sơ chủ đầu tư",
          img: "/9.jpg",
          summary: "Tập hợp thông tin về Thủ Thừa Invest, kinh nghiệm triển khai và các dự án đã tham gia.",
          documents: ["Hồ sơ năng lực chủ đầu tư", "Danh mục dự án đã triển khai", "Thông tin đội ngũ chuyên gia, kỹ sư, kiến trúc sư"],
          investorUse: "Dùng để đánh giá đây có phải đơn vị có năng lực triển khai thật hay không.",
        },
      ],
    },
    thesis: {
      index: "04",
      kicker: "Investment Thesis",
      title: "5 luận điểm khiến Agora không chỉ là đất nền, mà là một tài sản có lý do nắm giữ.",
      desc: "Một nhà đầu tư nghiêm túc không mua vì “nghe nói sẽ tăng giá”. Họ mua khi hiểu rõ những lực kéo có thể bảo vệ giá trị tài sản qua thời gian: pháp lý, hành chính, công nghiệp, thương mại và giao thông.",
      items: [
        {
          id: "THESIS-01",
          title: "Pháp lý rõ là lớp bảo vệ vốn đầu tiên",
          img: "/thesis-legal.jpg",
          headline: "Trước khi nghĩ đến lợi nhuận, nhà đầu tư phải bảo vệ vốn.",
          body: "Trong đầu tư đất nền, pháp lý là nền móng. Một tài sản có hồ sơ rõ, có sổ riêng, có khả năng sang tên và có cơ sở xây dựng sẽ giúp nhà đầu tư giảm rủi ro lớn nhất: mua phải tài sản khó chuyển nhượng hoặc không khai thác được.",
          points: ["Giảm rủi ro mất thanh khoản do pháp lý mập mờ", "Tăng niềm tin khi cần bán lại", "Tăng khả năng thuyết phục người mua thứ cấp"],
        },
        {
          id: "THESIS-02",
          title: "Trung tâm hành chính tạo nhu cầu hiện hữu",
          img: "/11.jpg",
          headline: "Dòng người đến từ hành chính là dòng cầu bền hơn sóng đầu cơ.",
          body: "Trung tâm hành chính 5ha nằm trong lòng Agora City là một lợi thế hiếm. Khi hành chính vận hành, khu vực xung quanh thường hình thành nhu cầu ăn uống, dịch vụ, lưu trú, văn phòng, nhà ở và thương mại phụ trợ.",
          points: ["Tạo lưu lượng người sử dụng thật", "Tăng khả năng khai thác shophouse", "Giúp dự án không chỉ phụ thuộc vào cư dân tương lai"],
        },
        {
          id: "THESIS-03",
          title: "Công nghiệp tạo lực cầu thuê và ở thật",
          img: "/12.jpg",
          headline: "Đất nền tốt cần có lực cầu sử dụng, không chỉ lực cầu mua bán.",
          body: "Agora được giới thiệu nằm tại khu vực gần khoảng 30 khu công nghiệp. Đây là nền tảng quan trọng để hình thành nhu cầu ở, thuê, kinh doanh dịch vụ và tích sản dài hạn từ chuyên gia, kỹ sư, chủ doanh nghiệp và lao động chất lượng cao.",
          points: ["Cầu thuê từ chuyên gia và kỹ sư", "Cầu dịch vụ từ khu công nghiệp", "Cầu tích sản từ nhóm thu nhập ổn định"],
        },
        {
          id: "THESIS-04",
          title: "Thương mại giúp tài sản có lý do khai thác",
          img: "/13.jpg",
          headline: "Co.opmart, phố đi bộ và tiện ích nội khu làm tăng tính sử dụng.",
          body: "Một khu đất có thương mại và tiện ích sẽ dễ hình thành thói quen sử dụng hơn một khu đất chỉ có phân lô. Với Co.opmart, phố đi bộ, clubhouse, nhà hàng và công viên, Agora có câu chuyện khai thác rõ hơn cho nhóm shophouse và nhà phố.",
          points: ["Tăng khả năng kinh doanh tầng trệt", "Tăng điểm đến cho cư dân và khách vãng lai", "Tạo lý do giữ tài sản dài hạn"],
        },
        {
          id: "THESIS-05",
          title: "Giao thông là nền tảng thanh khoản",
          img: "/14.jpg",
          headline: "Vị trí tốt không chỉ để đi lại, mà để tài sản dễ bán lại.",
          body: "Mặt tiền đại lộ 818 lộ giới 40m, kết nối nhanh đến cao tốc TP.HCM - Trung Lương và các trục liên vùng giúp Agora có lợi thế kết nối. Với nhà đầu tư, kết nối tốt đồng nghĩa tệp khách mua lại rộng hơn.",
          points: ["Kết nối TP.HCM, Tân An, Bến Lức", "Tăng khả năng tiếp cận người mua thứ cấp", "Tạo lợi thế cho thương mại mặt tiền"],
        },
      ],
    },
    evidence: {
      index: "05",
      kicker: "Evidence Library",
      title: "Bằng chứng hình ảnh: mỗi luận điểm phải có một tài liệu hoặc hình ảnh đi kèm.",
      desc: "Chuẩn ProfileLAB không để chữ đứng một mình. Nếu nói có trung tâm hành chính, cần ảnh. Nếu nói có quy hoạch, cần bản đồ. Nếu nói có sản phẩm khai thác, cần mặt bằng. Nếu nói có pháp lý, cần hồ sơ.",
      items: [
        ["EVIDENCE-01", "Tổng quan đại đô thị", "Sử dụng để mở hồ sơ, tạo cảm giác đây là một tài sản quy mô lớn, không phải dự án nhỏ lẻ.", "/1.jpg"],
        ["EVIDENCE-02", "Bối cảnh pháp lý", "Dùng ở phần Legal First để nhấn mạnh kiểm tra hồ sơ trước khi mua.", "/2.jpg"],
        ["EVIDENCE-03", "Checklist thẩm định", "Dùng để mô phỏng quy trình nhà đầu tư tự rà soát tài sản.", "/3.jpg"],
        ["EVIDENCE-04", "Hồ sơ sản phẩm", "Dùng cho phần shophouse, nhà phố, sản phẩm khai thác thương mại.", "/15.jpg"],
        ["EVIDENCE-05", "Bằng chứng bổ sung", "Dùng làm ảnh dự phòng cho section tiến độ, hình ảnh thực tế hoặc tài liệu pháp lý.", "/16.jpg"],
      ],
    },
    urban: {
      index: "06",
      kicker: "Urban Logic",
      title: "Agora phải được đọc như một cấu trúc đô thị, không phải một bảng hàng.",
      desc: "Một dự án đất nền đáng đầu tư cần có trật tự đô thị: trục chính, trung tâm hành chính, tiện ích thương mại, khu ở, khu khai thác dịch vụ và các điểm tạo dòng người. Khi trình bày đúng, nhà đầu tư sẽ hiểu vì sao từng vị trí trong dự án có vai trò khác nhau.",
      points: [
        ["Hành chính", "Tạo dòng người sử dụng ổn định."],
        ["Thương mại", "Tạo nhu cầu kinh doanh và dịch vụ."],
        ["Nhà ở", "Tạo cộng đồng cư dân và nhu cầu tiêu dùng."],
        ["Giao thông", "Tạo khả năng tiếp cận và thanh khoản."],
      ],
    },
    products: {
      index: "07",
      kicker: "Product Strategy",
      title: "Không bán sản phẩm trước khi khách hiểu chiến lược đầu tư.",
      desc: "Khi khách đã hiểu pháp lý và luận điểm tăng trưởng, lúc đó mới giới thiệu sản phẩm. Cách giới thiệu đúng không phải “anh mua căn này đi”, mà là “anh thuộc nhóm nhà đầu tư nào, sản phẩm nào phù hợp với mục tiêu đó”.",
      strategies: [
        ["Nhà đầu tư giữ tài sản dài hạn", "Nhà phố / nền vị trí ổn định", "Phù hợp với người ưu tiên pháp lý, khả năng sang tên và giá trị tích lũy theo sự phát triển của trung tâm hành chính.", "/15.jpg"],
        ["Nhà đầu tư khai thác kinh doanh", "Shophouse trục thương mại", "Phù hợp với người muốn tận dụng lưu lượng từ hành chính, tiện ích, Co.opmart và phố đi bộ.", "/13.jpg"],
        ["Nhà đầu tư cho thuê", "Sản phẩm gần trung tâm hành chính", "Phù hợp với nhu cầu cho thuê văn phòng nhỏ, lưu trú, dịch vụ ăn uống hoặc kinh doanh phụ trợ.", "/11.jpg"],
        ["Nhà đầu tư đón lực cầu KCN", "Nhà phố / shophouse dễ tiếp cận trục chính", "Phù hợp với chiến lược đón chuyên gia, kỹ sư, nhà cung ứng và nhóm khách có nhu cầu ở thật.", "/12.jpg"],
      ],
    },
    productFacts: {
      index: "08",
      kicker: "Product Facts",
      items: [
        ["PRODUCT-01", "Shophouse / Nhà phố căn góc", "Kích thước lô đất 7.5m x 17/22m, diện tích đất 152m², diện tích xây dựng 521m². Phù hợp với nhà đầu tư cần vị trí nổi bật, khả năng nhận diện thương mại cao và công năng vừa ở vừa kinh doanh.", "/15.jpg"],
        ["PRODUCT-02", "Shophouse / Nhà phố liền kề", "Kích thước lô đất 6m x 22m, diện tích đất 132m², diện tích xây dựng 468.5m². Phù hợp với chiến lược tích sản, khai thác tầng trệt hoặc cho thuê theo nhu cầu khu hành chính và thương mại.", "/16.jpg"],
      ],
    },
    developer: {
      index: "09",
      kicker: "Developer Profile",
      title: "Hồ sơ chủ đầu tư: yếu tố giúp nhà đầu tư đánh giá khả năng triển khai.",
      desc: "Một dự án không chỉ được đánh giá bằng vị trí và bản vẽ. Nhà đầu tư cần biết ai đứng sau dự án, đội ngũ có kinh nghiệm không, đã từng triển khai những dự án nào và có đủ năng lực đưa cam kết thành hiện trạng hay không.",
      cardTitle: "Thủ Thừa Invest",
      cardDesc: "Định vị dự án theo phương châm “nói thật - làm thật”, tập trung vào pháp lý, hiện trạng và giá trị sử dụng thay vì chỉ dựa vào kỳ vọng tương lai.",
      timeline: ["Đội ngũ hơn 20 năm kinh nghiệm", "Tham gia các dự án tại TP.HCM, Đồng Nai, Lâm Đồng, Thái Nguyên", "Long Tân City - Nhơn Trạch, Đồng Nai", "Hiệp Thành City - Quận 12", "Khu đô thị Điền Phước - Nhơn Trạch, Đồng Nai", "Nam Phương City - Bảo Lộc, Lâm Đồng", "Agora City - Trung tâm hành chính Thủ Thừa"],
    },
    conclusion: {
      index: "10",
      kicker: "Investment Conclusion",
      eyebrow: "Nếu chỉ nhớ một điều về Agora City",
      title: "Đây không phải là dự án yêu cầu nhà đầu tư tin vào lời quảng cáo. Đây là dự án cần được kiểm tra như một tài sản nhiều tỷ đồng.",
      grid: [
        ["Pháp lý", "Có cơ sở để kiểm chứng trước khi mua."],
        ["Hiện trạng", "Có trung tâm hành chính, hạ tầng và tiện ích làm bằng chứng."],
        ["Lực cầu", "Đến từ hành chính, công nghiệp, thương mại và kết nối vùng."],
        ["Sản phẩm", "Phù hợp tích sản, kinh doanh, cho thuê và khai thác dài hạn."],
      ],
    },
    contact: {
      eyebrow: "Investor Action",
      title: "Yêu cầu xem hồ sơ trước khi quyết định xuống tiền.",
      desc: "Nhà đầu tư nghiêm túc nên bắt đầu bằng việc xem hồ sơ pháp lý, mặt bằng, quy trình giao dịch, chính sách sản phẩm và hình ảnh hiện trạng. Sau đó mới đến bước chọn vị trí và đàm phán phương án đầu tư.",
      primary: "Xem Khu hồ sơ pháp lý",
      secondary: "Xem chiến lược sản phẩm",
      address: "Khu phố 11, Xã Thủ Thừa, Tỉnh Tây Ninh",
      phone: "Hotline: 0925 45 55 65",
      email: "Email: info@thuthua.com.vn",
      web: "Website: agoracity.vn",
    },
  },

  en: {
    metaTitle: "Agora City Investor Dossier",
    navBadge: "Investor Dossier Demo",
    navCta: "View Legal Data Room",
    nav: {
      summary: "Summary",
      checklist: "Checklist",
      legal: "Legal",
      thesis: "Thesis",
      products: "Products",
    },
    hero: {
      eyebrow: "Agora City Investor Dossier Demo",
      title: "Agora City Investor Dossier Center.",
      lead: "Designed for investors who want to review legal clarity, individual land titles, transferability, existing infrastructure and growth drivers before making a decision.",
      principle: "Principle of this dossier:",
      warning:
        "Do not buy because of advertising claims. Decide only after reviewing documents, evidence and the reasons that protect asset value.",
      primary: "Start Due Diligence",
      secondary: "View Investment Thesis",
      mediaLabel: "Core Advantage",
      mediaText: "Transparent legal status is the strongest competitive advantage.",
    },
    executiveStats: [
      ["127ha", "Urban-scale project", "A large land bank capable of forming a new urban center."],
      ["2,011", "Total products", "Including shophouses, townhouses, villas and apartments."],
      ["100%", "Individual land titles", "A key point for investors to verify before committing capital."],
      ["48+", "Internal amenities", "A foundation for living, business operation and cash-flow exploitation."],
    ],
    intro: {
      index: "02",
      kicker: "Market Problem",
      title: "Land investors do not lack projects to view. They lack an asset clear enough to commit capital.",
      p1: "Many real estate landing pages only try to prove that a project looks beautiful. Serious investors do not decide based on renderings. They decide when legal risks are clarified, documents are organized and the investment thesis is strong enough.",
      p2: "Therefore, Agora City should not be presented as a sales page. It should be presented as an asset due diligence dossier: with a checklist, investment files, evidence, investment thesis and a mechanism for investors to verify information themselves.",
      riskTitle: "5 reasons investors often lose money in land investments",
      risks: [
        "Failure to verify individual land titles and transferability.",
        "Buying promises of amenities instead of evidence of existing conditions.",
        "Not understanding planning, road boundaries and construction conditions.",
        "Not identifying who will create rental or resale demand.",
        "Evaluating a project emotionally instead of legally.",
      ],
    },
    checklist: {
      index: "03",
      kicker: "Investor Checklist",
      title: "7 questions investors must answer before buying land in Agora City.",
      desc: "This is the most important section of the page. Instead of pushing visitors to leave their phone number immediately, the website must help them review the biggest risks first. Once the answers are clear, consultation demand becomes more natural.",
      pain: "Investor concern:",
      answer: "Agora answer:",
      scoreLabel: "Investor Readiness Score",
      scoreTitle: "6 / 6 key criteria have a basis for presentation",
      scoreDesc:
        "The goal is not to tell investors to believe. The goal is to provide enough data for them to see that Agora has more layers of verification than a typical land project.",
      items: [
        {
          code: "RISK-01",
          question: "Does the land have individual titles?",
          investorPain: "Investors fear buying an asset they cannot legally own or having to wait for legal completion.",
          agoraAnswer: "Agora City is positioned with 100% individual land titles, giving buyers a basis for verification before transaction.",
          status: "Verifiable basis",
        },
        {
          code: "RISK-02",
          question: "Can ownership be transferred?",
          investorPain: "An asset that cannot be transferred reduces liquidity and increases resale risk.",
          agoraAnswer: "The catalogue states that customers can complete transfer directly on the title.",
          status: "Priority for review",
        },
        {
          code: "RISK-03",
          question: "Is construction permitted?",
          investorPain: "Many buyers purchase land but cannot exploit it due to construction restrictions.",
          agoraAnswer: "The catalogue states that 100% of land plots are licensed for construction.",
          status: "Construction basis",
        },
        {
          code: "RISK-04",
          question: "Is the infrastructure existing?",
          investorPain: "Investors do not want to buy a promise. They need to see roads, facilities, buildings and operation potential.",
          agoraAnswer: "The project has a completed 5ha administrative center, Avenue 818 and an amenity system under development.",
          status: "Existing evidence",
        },
        {
          code: "RISK-05",
          question: "Who will create resale or rental demand?",
          investorPain: "Without real demand, land may appreciate slowly or face liquidity problems.",
          agoraAnswer: "Agora is located near around 30 industrial zones, the administrative center and regional connectivity axes.",
          status: "Demand drivers",
        },
        {
          code: "RISK-06",
          question: "Does the project have reasons for long-term holding?",
          investorPain: "Investors need an asset with multiple value protection layers, not only market speculation.",
          agoraAnswer: "Legal clarity, administration, industry, commerce, connectivity and three river-facing sides form the long-term thesis.",
          status: "Investment thesis",
        },
      ],
    },
    legal: {
      index: "03",
      kicker: "Legal First",
      title: "Before reviewing location or price, review Agora City’s legal dossier.",
      desc: "Agora City’s strongest advantage is not only its 127ha scale or internal amenities, but the ability to let investors verify legal documents from the beginning: individual titles, planning, financial obligations, construction permits, transaction conditions and developer profile.",
      useLabel: "Investor use:",
      request: "Request documents",
      items: [
        {
          code: "LEGAL-01",
          title: "Individual title file",
          img: "/4.jpg",
          summary: "A document set helping investors review land-use rights and ownership standing.",
          documents: ["Sample land-use right certificate", "List of products with individual legal status", "Transaction conditions by product"],
          investorUse: "To answer the most important question: Can I legally own this asset after purchase?",
        },
        {
          code: "LEGAL-02",
          title: "Planning dossier",
          img: "/5.jpg",
          summary: "Documents for reviewing master planning, road boundaries, zoning and land-use functions.",
          documents: ["Masterplan layout", "Avenue 818 with 40m right-of-way information", "Northern town road with 24m right-of-way information"],
          investorUse: "To assess whether the land is in the right location, function and urban orientation.",
        },
        {
          code: "LEGAL-03",
          title: "Financial obligation dossier",
          img: "/6.jpg",
          summary: "Documents indicating key land-related financial obligations have been completed.",
          documents: ["Confirmation of financial obligation completion", "Land-use fee information", "Document index for advisory verification"],
          investorUse: "To reduce the risk of purchasing an asset with outstanding financial obligations.",
        },
        {
          code: "LEGAL-04",
          title: "Construction permit file",
          img: "/7.jpg",
          summary: "Documents helping investors verify construction, business operation or asset exploitation ability.",
          documents: ["Construction permit information", "Building regulations by product type", "Functional layouts for shophouses/townhouses"],
          investorUse: "To answer: Can the asset be built, operated or exploited after purchase?",
        },
        {
          code: "LEGAL-05",
          title: "Transaction condition file",
          img: "/8.jpg",
          summary: "A document set explaining booking, contract signing, payment, notarization and transfer procedures.",
          documents: ["Transaction process", "Contract signing conditions", "Payment and handover milestones"],
          investorUse: "To know exactly where the money goes and where the documents go.",
        },
        {
          code: "LEGAL-06",
          title: "Developer profile",
          img: "/9.jpg",
          summary: "Information about Thu Thua Invest, development experience and related projects.",
          documents: ["Developer capability profile", "Implemented project portfolio", "Specialist, engineer and architect team information"],
          investorUse: "To assess whether the developer has real execution capability.",
        },
      ],
    },
    thesis: {
      index: "04",
      kicker: "Investment Thesis",
      title: "5 arguments that make Agora not just land, but an asset with reasons to hold.",
      desc: "A serious investor does not buy because “prices may rise”. They buy when they understand the forces that may protect asset value over time: legal clarity, administration, industry, commerce and transportation.",
      items: [
        {
          id: "THESIS-01",
          title: "Legal clarity is the first layer of capital protection",
          img: "/thesis-legal.jpg",
          headline: "Before thinking about profit, investors must protect capital.",
          body: "In land investment, legal status is the foundation. An asset with clear documents, individual title, transferability and construction basis helps reduce the biggest risk: buying an asset that is difficult to transfer or exploit.",
          points: ["Reduce liquidity risk from unclear legal status", "Increase confidence for resale", "Improve persuasion with secondary buyers"],
        },
        {
          id: "THESIS-02",
          title: "The administrative center creates existing demand",
          img: "/11.jpg",
          headline: "Demand from administration is more durable than speculative waves.",
          body: "The 5ha administrative center inside Agora City is a rare advantage. Once administration operates, surrounding demand often forms for F&B, services, accommodation, offices, housing and supporting commerce.",
          points: ["Creates real user traffic", "Improves shophouse exploitation potential", "Reduces dependence on future residents only"],
        },
        {
          id: "THESIS-03",
          title: "Industry creates rental and residential demand",
          img: "/12.jpg",
          headline: "Good land needs use demand, not only trading demand.",
          body: "Agora is introduced as being near around 30 industrial zones. This is an important foundation for housing, rental, services and long-term asset holding demand from experts, engineers, business owners and qualified workers.",
          points: ["Rental demand from experts and engineers", "Service demand from industrial zones", "Asset holding demand from stable-income groups"],
        },
        {
          id: "THESIS-04",
          title: "Commerce gives the asset a reason to be exploited",
          img: "/13.jpg",
          headline: "Co.opmart, walking streets and internal amenities increase usability.",
          body: "Land with commerce and amenities can form usage habits more easily than simple subdivisions. With Co.opmart, walking streets, clubhouse, restaurants and parks, Agora has a clearer exploitation story for shophouses and townhouses.",
          points: ["Improves ground-floor business potential", "Creates destinations for residents and visitors", "Strengthens long-term holding logic"],
        },
        {
          id: "THESIS-05",
          title: "Transportation is the foundation of liquidity",
          img: "/14.jpg",
          headline: "Good location is not only for movement, but also for resale liquidity.",
          body: "Frontage on Avenue 818 with a 40m right-of-way, quick connection to the HCMC - Trung Luong expressway and regional routes gives Agora a connectivity advantage. For investors, good connectivity means a broader future buyer base.",
          points: ["Connection to HCMC, Tan An and Ben Luc", "Broader access to secondary buyers", "Commercial advantage for frontage products"],
        },
      ],
    },
    evidence: {
      index: "05",
      kicker: "Evidence Library",
      title: "Visual evidence: every investment argument needs a document or image attached.",
      desc: "ProfileLAB standard does not let text stand alone. If we say there is an administrative center, there must be an image. If we mention planning, there must be a map. If we mention exploitation products, there must be layouts. If we mention legal status, there must be documents.",
      items: [
        ["EVIDENCE-01", "Urban-scale overview", "Used to open the dossier and show that this is a large-scale asset, not a small project.", "/1.jpg"],
        ["EVIDENCE-02", "Legal context", "Used in the Legal First section to emphasize document review before purchase.", "/2.jpg"],
        ["EVIDENCE-03", "Due diligence checklist", "Used to simulate the investor self-verification process.", "/3.jpg"],
        ["EVIDENCE-04", "Product dossier", "Used for shophouses, townhouses and commercial exploitation products.", "/15.jpg"],
        ["EVIDENCE-05", "Additional evidence", "Used as backup imagery for progress, actual site images or legal documents.", "/16.jpg"],
      ],
    },
    urban: {
      index: "06",
      kicker: "Urban Logic",
      title: "Agora should be read as an urban structure, not as an inventory list.",
      desc: "An investable land project needs urban order: main roads, administrative center, commercial amenities, residential zones, service exploitation areas and traffic generators. When presented properly, investors understand why each location within the project has a different role.",
      points: [
        ["Administration", "Creates stable user traffic."],
        ["Commerce", "Creates business and service demand."],
        ["Housing", "Creates a resident community and consumption demand."],
        ["Transportation", "Creates access and liquidity."],
      ],
    },
    products: {
      index: "07",
      kicker: "Product Strategy",
      title: "Do not sell the product before investors understand the strategy.",
      desc: "Once investors understand the legal basis and growth thesis, then products can be introduced. The right approach is not “buy this unit”, but “which investor profile are you, and which product fits that goal?”",
      strategies: [
        ["Long-term asset holder", "Townhouse / stable-position land", "For investors prioritizing legal clarity, transferability and accumulated value as the administrative center develops.", "/15.jpg"],
        ["Business exploitation investor", "Commercial-axis shophouse", "For investors who want to leverage traffic from administration, amenities, Co.opmart and walking streets.", "/13.jpg"],
        ["Rental investor", "Products near the administrative center", "Suitable for small offices, accommodation, F&B or supporting service rental demand.", "/11.jpg"],
        ["Industrial demand investor", "Townhouse / shophouse near main routes", "Suitable for capturing experts, engineers, suppliers and real housing demand.", "/12.jpg"],
      ],
    },
    productFacts: {
      index: "08",
      kicker: "Product Facts",
      items: [
        ["PRODUCT-01", "Corner shophouse / townhouse", "Land size 7.5m x 17/22m, land area 152m², construction area 521m². Suitable for investors seeking a prominent position, strong commercial visibility and a live-work function.", "/15.jpg"],
        ["PRODUCT-02", "Adjacent shophouse / townhouse", "Land size 6m x 22m, land area 132m², construction area 468.5m². Suitable for asset accumulation, ground-floor business or rental demand from the administrative and commercial zone.", "/16.jpg"],
      ],
    },
    developer: {
      index: "09",
      kicker: "Developer Profile",
      title: "Developer profile: a key factor for assessing execution capability.",
      desc: "A project should not be evaluated only by location and drawings. Investors need to know who stands behind it, whether the team has experience, which projects they have worked on and whether they can turn commitments into reality.",
      cardTitle: "Thu Thua Invest",
      cardDesc: "The project is positioned around the principle of “truthful commitment and real execution”, focusing on legal clarity, existing conditions and usable value rather than future expectations only.",
      timeline: ["More than 20 years of team experience", "Participation in projects across HCMC, Dong Nai, Lam Dong and Thai Nguyen", "Long Tan City - Nhon Trach, Dong Nai", "Hiep Thanh City - District 12", "Dien Phuoc Urban Area - Nhon Trach, Dong Nai", "Nam Phuong City - Bao Loc, Lam Dong", "Agora City - Thu Thua administrative center"],
    },
    conclusion: {
      index: "10",
      kicker: "Investment Conclusion",
      eyebrow: "If you remember only one thing about Agora City",
      title: "This is not a project that asks investors to believe advertising. This is a project that should be reviewed like a multi-billion-dong asset.",
      grid: [
        ["Legal", "There is a basis for verification before purchase."],
        ["Existing conditions", "Administrative center, infrastructure and amenities act as evidence."],
        ["Demand drivers", "Generated by administration, industry, commerce and regional connectivity."],
        ["Products", "Suitable for asset holding, business, rental and long-term exploitation."],
      ],
    },
    contact: {
      eyebrow: "Investor Action",
      title: "Request the dossier before making an investment decision.",
      desc: "A serious investor should begin with legal documents, masterplan, transaction process, product policy and actual site images. Only then should they select positions and negotiate an investment plan.",
      primary: "View Legal Data Room",
      secondary: "View Product Strategy",
      address: "Quarter 11, Thu Thua Commune, Tay Ninh Province",
      phone: "Hotline: 0925 45 55 65",
      email: "Email: info@thuthua.com.vn",
      web: "Website: agoracity.vn",
    },
  },

  zh: {
    metaTitle: "Agora City 投资者尽调档案",
    navBadge: "投资者档案示范",
    navCta: "查看法律资料室",
    nav: {
      summary: "摘要",
      checklist: "清单",
      legal: "法律",
      thesis: "投资逻辑",
      products: "产品",
    },
    hero: {
      eyebrow: "Agora City 投资者档案示范",
      title: "守德行政中心土地投资尽调档案。",
      lead: "为希望在决策前核查法律清晰度、独立土地证、过户能力、现有基础设施与增长动力的投资者而设计。",
      principle: "本档案的原则：",
      warning:
        "不要因为广告而购买。只有在核查文件、证据以及资产价值保护逻辑之后，才做出投资决定。",
      primary: "开始核查资料",
      secondary: "查看投资逻辑",
      mediaLabel: "核心优势",
      mediaText: "法律透明度是最强的竞争优势。",
    },
    executiveStats: [
      ["127公顷", "大型城市项目规模", "具备形成新城市中心的土地基础。"],
      ["2,011", "全区产品数量", "包括商铺、联排住宅、别墅和公寓。"],
      ["100%", "独立土地证", "投资者在投入资金前必须核查的关键点。"],
      ["48+", "内部配套", "为居住、经营和现金流开发提供基础。"],
    ],
    intro: {
      index: "01",
      kicker: "市场问题",
      title: "土地投资者并不缺项目可看，缺的是一个足够清晰、足以下决心投入资金的资产。",
      p1: "许多房地产落地页只想证明项目很漂亮。但严肃的投资者不会仅凭效果图做决定。他们会在法律风险被说明清楚、文件被系统整理、投资逻辑足够有说服力时才做决定。",
      p2: "因此，Agora City 不应被呈现为一个销售页面，而应被呈现为一份资产尽调档案：有清单、有投资文件、有证据、有投资逻辑，并让客户能够自行核查。",
      riskTitle: "土地投资者常见亏损的 5 个原因",
      risks: [
        "未核查独立土地证和过户能力。",
        "购买配套承诺，而不是现状证据。",
        "不了解规划、道路红线和建设条件。",
        "无法判断谁会形成租赁或二次购买需求。",
        "用情绪判断项目，而不是用法律文件判断。",
      ],
    },
    checklist: {
      index: "02",
      kicker: "投资者清单",
      title: "购买 Agora City 土地前，投资者必须回答的 7 个问题。",
      desc: "这是页面最重要的部分。网站不应急于要求客户留下电话，而应先帮助客户核查最大风险。当答案清楚后，咨询需求会更自然地产生。",
      pain: "投资者担心：",
      answer: "Agora 的回答：",
      scoreLabel: "投资准备度评分",
      scoreTitle: "6 / 6 类关键标准具备呈现基础",
      scoreDesc:
        "目标不是让客户“相信”，而是提供足够资料，让客户自行看到：Agora 比普通土地项目有更多可核查层级。",
      items: [
        {
          code: "RISK-01",
          question: "土地是否有独立证书？",
          investorPain: "投资者最担心购买后无法合法持有，或必须长期等待法律手续完善。",
          agoraAnswer: "Agora City 定位为 100% 地块具备独立土地证，为购买前核查提供基础。",
          status: "可核查基础",
        },
        {
          code: "RISK-02",
          question: "是否可以办理过户？",
          investorPain: "无法过户的资产会降低流动性，并增加未来转售风险。",
          agoraAnswer: "项目资料显示，客户交易后可直接在证书上办理过户。",
          status: "优先核查",
        },
        {
          code: "RISK-03",
          question: "是否允许建设？",
          investorPain: "许多买家购买土地后，因为建设限制而无法开发或使用。",
          agoraAnswer: "项目资料显示，100% 地块获得建设许可。",
          status: "建设依据",
        },
        {
          code: "RISK-04",
          question: "基础设施是否已经存在？",
          investorPain: "投资者不想购买承诺，而是需要看到道路、配套、建筑和运营可能性。",
          agoraAnswer: "项目拥有已完成的 5 公顷行政中心、818 大道以及正在部署的配套系统。",
          status: "现状证据",
        },
        {
          code: "RISK-05",
          question: "谁会创造转售或租赁需求？",
          investorPain: "如果没有真实需求，土地升值可能缓慢，且流动性较弱。",
          agoraAnswer: "Agora 位于约 30 个工业区、行政中心和区域交通轴线附近。",
          status: "需求驱动",
        },
        {
          code: "RISK-06",
          question: "项目是否具备长期持有理由？",
          investorPain: "投资者需要的是多层价值保护，而不是只依赖市场炒作。",
          agoraAnswer: "法律清晰、行政中心、工业、商业、交通以及三面临河构成长期投资逻辑。",
          status: "投资逻辑",
        },
      ],
    },
    legal: {
      index: "03",
      kicker: "法律优先",
      title: "在看位置或价格之前，先查看 Agora City 的法律资料。",
      desc: "Agora City 最大的优势不只是 127 公顷规模或内部配套，而是让投资者从一开始就能核查法律文件：独立土地证、规划、财务义务、建设许可、交易条件和开发商资料。",
      useLabel: "投资者用于：",
      request: "申请查看资料",
      items: [
        {
          code: "LEGAL-01",
          title: "独立土地证资料",
          img: "/4.jpg",
          summary: "帮助投资者核查土地使用权和资产持有能力的资料组合。",
          documents: ["土地使用权证样本", "具备独立法律状态的地块/产品清单", "各产品交易条件信息"],
          investorUse: "回答最重要的问题：购买后我是否能合法持有该资产？",
        },
        {
          code: "LEGAL-02",
          title: "规划资料",
          img: "/5.jpg",
          summary: "用于核查总体规划、道路红线、分区和土地功能的文件。",
          documents: ["总体规划图", "818 大道 40 米路幅信息", "镇北侧道路 24 米路幅信息"],
          investorUse: "评估土地是否处于正确位置、正确功能和正确城市发展方向。",
        },
        {
          code: "LEGAL-03",
          title: "财务义务资料",
          img: "/6.jpg",
          summary: "显示项目已完成重要土地相关财务义务的文件。",
          documents: ["财务义务完成确认", "土地使用费相关信息", "供咨询核对的资料索引"],
          investorUse: "降低购买仍存在财务义务资产的风险。",
        },
        {
          code: "LEGAL-04",
          title: "建设许可资料",
          img: "/7.jpg",
          summary: "帮助投资者核查建设、经营或资产开发能力的资料。",
          documents: ["建设许可信息", "各产品类型建设规范", "商铺/联排住宅功能平面"],
          investorUse: "回答：购买后是否能够建设、运营或开发？",
        },
        {
          code: "LEGAL-05",
          title: "交易条件资料",
          img: "/8.jpg",
          summary: "说明认购、签约、付款、公证和过户流程的资料。",
          documents: ["交易流程", "合同签署条件", "付款和资料交付节点"],
          investorUse: "帮助投资者清楚了解资金流向和文件流向。",
        },
        {
          code: "LEGAL-06",
          title: "开发商资料",
          img: "/9.jpg",
          summary: "关于 Thủ Thừa Invest 的信息、开发经验和参与项目。",
          documents: ["开发商能力档案", "已实施项目清单", "专家、工程师与建筑师团队信息"],
          investorUse: "评估开发商是否具备真实执行能力。",
        },
      ],
    },
    thesis: {
      index: "04",
      kicker: "投资逻辑",
      title: "5 个论点说明 Agora 不只是土地，而是一个有持有理由的资产。",
      desc: "严肃的投资者不会因为“听说会涨价”而购买。他们会在理解能够长期保护资产价值的力量后购买：法律、行政、工业、商业和交通。",
      items: [
        {
          id: "THESIS-01",
          title: "法律清晰是资本保护的第一层",
          img: "/thesis-legal.jpg",
          headline: "在考虑利润之前，投资者必须先保护本金。",
          body: "在土地投资中，法律状态是基础。一个文件清晰、拥有独立证书、可过户且具备建设依据的资产，可以降低最大风险：买到难以转让或无法开发的资产。",
          points: ["降低法律不清导致的流动性风险", "提高未来转售信任度", "增强对二级买家的说服力"],
        },
        {
          id: "THESIS-02",
          title: "行政中心创造现有需求",
          img: "/11.jpg",
          headline: "来自行政功能的人流，比短期炒作更持久。",
          body: "位于 Agora City 内部的 5 公顷行政中心是稀缺优势。行政功能运作后，周边通常会形成餐饮、服务、住宿、办公、居住和配套商业需求。",
          points: ["创造真实使用人流", "提升商铺开发潜力", "使项目不只依赖未来居民"],
        },
        {
          id: "THESIS-03",
          title: "工业带来租赁和居住需求",
          img: "/12.jpg",
          headline: "优质土地需要使用需求，而不只是买卖需求。",
          body: "Agora 被介绍为靠近约 30 个工业区。这为专家、工程师、企业主和高质量劳动群体形成居住、租赁、服务和长期持有需求提供基础。",
          points: ["来自专家和工程师的租赁需求", "来自工业区的服务需求", "来自稳定收入群体的持有需求"],
        },
        {
          id: "THESIS-04",
          title: "商业让资产具备开发理由",
          img: "/13.jpg",
          headline: "Co.opmart、步行街和内部配套提高资产使用性。",
          body: "拥有商业与配套的土地，比单纯分割地块更容易形成使用习惯。凭借 Co.opmart、步行街、会所、餐饮和公园，Agora 对商铺和联排住宅有更清晰的开发故事。",
          points: ["提升一层经营潜力", "为居民和访客创造目的地", "强化长期持有逻辑"],
        },
        {
          id: "THESIS-05",
          title: "交通是流动性的基础",
          img: "/14.jpg",
          headline: "好位置不仅便于出行，也让资产更容易转售。",
          body: "818 大道 40 米路幅、快速连接胡志明市 - 中良高速及区域道路，为 Agora 带来连接优势。对投资者而言，交通越好，未来买家范围越广。",
          points: ["连接胡志明市、新安和边沥", "接触更广泛的二级买家", "提升临街商业产品优势"],
        },
      ],
    },
    evidence: {
      index: "05",
      kicker: "证据库",
      title: "视觉证据：每一个投资论点都必须配有文件或图片。",
      desc: "ProfileLAB 标准不让文字单独存在。说有行政中心，就需要图片；说有规划，就需要地图；说有可开发产品，就需要平面；说有法律状态，就需要文件。",
      items: [
        ["EVIDENCE-01", "大型城市项目总览", "用于打开档案，显示这是一个大规模资产，而不是小项目。", "/1.jpg"],
        ["EVIDENCE-02", "法律背景", "用于 Legal First 部分，强调购买前核查文件。", "/2.jpg"],
        ["EVIDENCE-03", "尽调清单", "用于模拟投资者自我核查流程。", "/3.jpg"],
        ["EVIDENCE-04", "产品资料", "用于商铺、联排住宅和商业开发产品。", "/15.jpg"],
        ["EVIDENCE-05", "补充证据", "用于进度、现场图片或法律文件的备用图。", "/16.jpg"],
      ],
    },
    urban: {
      index: "06",
      kicker: "城市逻辑",
      title: "Agora 应该被理解为城市结构，而不是销售清单。",
      desc: "值得投资的土地项目需要城市秩序：主干道、行政中心、商业配套、居住区、服务开发区以及创造人流的节点。正确呈现后，投资者会明白项目中每个位置为何具有不同角色。",
      points: [
        ["行政", "创造稳定使用人流。"],
        ["商业", "创造经营与服务需求。"],
        ["住宅", "形成居民社区和消费需求。"],
        ["交通", "创造通达性和流动性。"],
      ],
    },
    products: {
      index: "07",
      kicker: "产品策略",
      title: "在客户理解投资策略之前，不要先销售产品。",
      desc: "当客户理解法律基础和增长逻辑之后，才适合介绍产品。正确方式不是“请买这一套”，而是“您属于哪类投资者，哪类产品适合您的目标？”",
      strategies: [
        ["长期持有型投资者", "联排住宅 / 稳定位置地块", "适合重视法律清晰、可过户和随着行政中心发展而积累价值的投资者。", "/15.jpg"],
        ["经营开发型投资者", "商业轴线商铺", "适合希望利用行政、配套、Co.opmart 和步行街人流的投资者。", "/13.jpg"],
        ["租赁型投资者", "靠近行政中心的产品", "适合小型办公室、住宿、餐饮或配套服务租赁需求。", "/11.jpg"],
        ["工业需求型投资者", "靠近主轴线的联排/商铺", "适合承接专家、工程师、供应商和真实居住需求。", "/12.jpg"],
      ],
    },
    productFacts: {
      index: "08",
      kicker: "产品事实",
      items: [
        ["PRODUCT-01", "转角商铺 / 联排住宅", "土地尺寸 7.5m x 17/22m，土地面积 152m²，建筑面积 521m²。适合追求突出位置、强商业识别度和住商两用功能的投资者。", "/15.jpg"],
        ["PRODUCT-02", "相邻商铺 / 联排住宅", "土地尺寸 6m x 22m，土地面积 132m²，建筑面积 468.5m²。适合资产积累、一层经营或行政商业区租赁需求。", "/16.jpg"],
      ],
    },
    developer: {
      index: "09",
      kicker: "开发商资料",
      title: "开发商资料：帮助投资者评估执行能力的关键因素。",
      desc: "项目不能只通过位置和图纸来评估。投资者需要知道谁在背后执行，团队是否有经验，参与过哪些项目，以及是否有能力把承诺转化为现实。",
      cardTitle: "Thủ Thừa Invest",
      cardDesc: "项目围绕“真实承诺、真实执行”的原则定位，重点关注法律清晰、现状证据和可使用价值，而不是只依赖未来预期。",
      timeline: ["团队拥有 20 年以上经验", "参与胡志明市、同奈、林同、太原等地项目", "Long Tan City - 同奈仁泽", "Hiep Thanh City - 第 12 郡", "Dien Phuoc 城市区 - 同奈仁泽", "Nam Phuong City - 林同宝禄", "Agora City - 守德行政中心"],
    },
    conclusion: {
      index: "10",
      kicker: "投资结论",
      eyebrow: "如果只记住 Agora City 的一件事",
      title: "这不是一个要求投资者相信广告的项目。这是一个应该像数十亿越盾资产一样被核查的项目。",
      grid: [
        ["法律", "购买前有核查基础。"],
        ["现状", "行政中心、基础设施和配套可作为证据。"],
        ["需求", "来自行政、工业、商业和区域连接。"],
        ["产品", "适合持有、经营、租赁和长期开发。"],
      ],
    },
    contact: {
      eyebrow: "投资者行动",
      title: "在决定投资前申请查看完整资料。",
      desc: "严肃投资者应先查看法律文件、总平面、交易流程、产品政策和现场图片。之后再选择位置并谈判投资方案。",
      primary: "查看法律资料室",
      secondary: "查看产品策略",
      address: "西宁省守德社第 11 区",
      phone: "热线：0925 45 55 65",
      email: "邮箱：info@thuthua.com.vn",
      web: "网站：agoracity.vn",
    },
  },
};

function getInitialLang() {
  const saved = localStorage.getItem("agora-lang");
  if (saved && content[saved]) return saved;

  const browserLang = navigator.language?.toLowerCase() || "";
  if (browserLang.startsWith("zh")) return "zh";
  if (browserLang.startsWith("en")) return "en";
  return "vi";
}

function SectionLabel({ index, kicker }) {
  return (
    <div className="section-label">
      <span>{index}</span>
      <p>{kicker}</p>
    </div>
  );
}

function App() {
  const [lang, setLang] = useState(getInitialLang);
  const t = useMemo(() => content[lang], [lang]);

  useEffect(() => {
    localStorage.setItem("agora-lang", lang);
    document.documentElement.lang = lang === "zh" ? "zh-Hans" : lang;
    document.title = t.metaTitle;
  }, [lang, t.metaTitle]);

  return (
    <main className="investor-site" id="top">
      <header className="investor-nav">
        <a href="#top" className="brand">
          <img src="/logo_agora.png" alt="Agora City" />
          <span>{t.navBadge}</span>
        </a>

        <nav>
          <a href="#summary">{t.nav.summary}</a>
          <a href="#checklist">{t.nav.checklist}</a>
          <a href="#legal">{t.nav.legal}</a>
          <a href="#thesis">{t.nav.thesis}</a>
          <a href="#products">{t.nav.products}</a>
        </nav>

        <div className="nav-right">
          <div className="language-switcher" aria-label="Language switcher">
            {LANGS.map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => setLang(item.key)}
                className={lang === item.key ? "active" : ""}
              >
                {item.label}
              </button>
            ))}
          </div>

          <a href="#dataroom" className="nav-cta">
            {t.navCta}
          </a>
        </div>
      </header>

      <section className="dossier-hero">
        <div className="hero-copy">
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1>{t.hero.title}</h1>
          <p className="hero-lead">{t.hero.lead}</p>

          <div className="hero-warning">
            <strong>{t.hero.principle}</strong>
            <span>{t.hero.warning}</span>
          </div>

          <div className="hero-actions">
            <a href="#checklist" className="btn btn--gold">
              {t.hero.primary}
            </a>
            <a href="#thesis" className="btn btn--dark">
              {t.hero.secondary}
            </a>
          </div>
        </div>

        <div className="hero-media">
          <img src="/1.jpg" alt="Agora City" />
          <div className="media-card">
            <span>{t.hero.mediaLabel}</span>
            <strong>{t.hero.mediaText}</strong>
          </div>
        </div>
      </section>

      <section className="executive-strip" id="summary">
        {t.executiveStats.map(([value, label, note]) => (
          <article key={label}>
            <strong>{value}</strong>
            <h3>{label}</h3>
            <p>{note}</p>
          </article>
        ))}
      </section>

      <section className="section legal-section" id="legal">
        <SectionLabel index={t.legal.index} kicker={t.legal.kicker} />

        <div className="section-heading">
          <h2>{t.legal.title}</h2>
          <p>{t.legal.desc}</p>
        </div>

        <div className="data-room-grid" id="dataroom">
          {t.legal.items.map((item) => (
            <article className="data-room-card" key={item.code}>
              <div className="document-image">
                <img src={item.img} alt={item.title} />
              </div>

              <div className="document-content">
                <span>{item.code}</span>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>

                <ul>
                  {item.documents.map((doc) => (
                    <li key={doc}>{doc}</li>
                  ))}
                </ul>

                <div className="investor-use">
                  <b>{t.legal.useLabel}</b>
                  <p>{item.investorUse}</p>
                </div>

                <a href="#contact" className="mini-link">
                  {t.legal.request}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>


      <section className="section intro-section">
        <SectionLabel index={t.intro.index} kicker={t.intro.kicker} />
        <div className="intro-grid">
          <div>
            <h2>{t.intro.title}</h2>
            <p>{t.intro.p1}</p>
            <p>{t.intro.p2}</p>
          </div>

          <div className="risk-panel">
            <h3>{t.intro.riskTitle}</h3>
            <ul>
              {t.intro.risks.map((risk) => (
                <li key={risk}>{risk}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section checklist-section" id="checklist">
        <SectionLabel index={t.checklist.index} kicker={t.checklist.kicker} />

        <div className="section-heading">
          <h2>{t.checklist.title}</h2>
          <p>{t.checklist.desc}</p>
        </div>

        <div className="question-grid">
          {t.checklist.items.map((item) => (
            <article className="question-card" key={item.code}>
              <div className="card-topline">
                <span>{item.code}</span>
                <strong>{item.status}</strong>
              </div>
              <h3>{item.question}</h3>
              <div className="qa-block">
                <p>
                  <b>{t.checklist.pain}</b> {item.investorPain}
                </p>
                <p>
                  <b>{t.checklist.answer}</b> {item.agoraAnswer}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="checklist-result">
          <span>{t.checklist.scoreLabel}</span>
          <strong>{t.checklist.scoreTitle}</strong>
          <p>{t.checklist.scoreDesc}</p>
        </div>
      </section>

      

      <section className="section thesis-section" id="thesis">
        <SectionLabel index={t.thesis.index} kicker={t.thesis.kicker} />

        <div className="section-heading">
          <h2>{t.thesis.title}</h2>
          <p>{t.thesis.desc}</p>
        </div>

        <div className="thesis-stack">
          {t.thesis.items.map((item) => (
            <article className="thesis-card" key={item.id}>
              <div className="thesis-image">
                <img src={item.img} alt={item.title} />
                <span>{item.id}</span>
              </div>

              <div className="thesis-copy">
                <h3>{item.title}</h3>
                <h4>{item.headline}</h4>
                <p>{item.body}</p>

                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section evidence-section">
        <SectionLabel index={t.evidence.index} kicker={t.evidence.kicker} />

        <div className="section-heading">
          <h2>{t.evidence.title}</h2>
          <p>{t.evidence.desc}</p>
        </div>

        <div className="evidence-grid">
          {t.evidence.items.map(([label, title, note, img]) => (
            <figure className="evidence-card" key={label}>
              <img src={img} alt={title} />
              <figcaption>
                <span>{label}</span>
                <h3>{title}</h3>
                <p>{note}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section masterplan-section">
        <SectionLabel index={t.urban.index} kicker={t.urban.kicker} />

        <div className="masterplan-layout">
          <div>
            <h2>{t.urban.title}</h2>
            <p>{t.urban.desc}</p>

            <div className="urban-points">
              {t.urban.points.map(([title, desc]) => (
                <div key={title}>
                  <strong>{title}</strong>
                  <span>{desc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="masterplan-image">
            <img src="/14.jpg" alt="Agora City masterplan" />
          </div>
        </div>
      </section>

      <section className="section product-strategy" id="products">
        <SectionLabel index={t.products.index} kicker={t.products.kicker} />

        <div className="section-heading">
          <h2>{t.products.title}</h2>
          <p>{t.products.desc}</p>
        </div>

        <div className="strategy-grid">
          {t.products.strategies.map(([type, product, logic, image]) => (
            <article className="strategy-card" key={type}>
              <img src={image} alt={product} />
              <div>
                <span>{type}</span>
                <h3>{product}</h3>
                <p>{logic}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section product-detail-section">
        <SectionLabel index={t.productFacts.index} kicker={t.productFacts.kicker} />

        <div className="product-detail-grid">
          {t.productFacts.items.map(([code, title, desc, image]) => (
            <article className="product-fact-card" key={code}>
              <img src={image} alt={title} />
              <div>
                <span>{code}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section developer-section">
        <SectionLabel index={t.developer.index} kicker={t.developer.kicker} />

        <div className="developer-layout">
          <div>
            <h2>{t.developer.title}</h2>
            <p>{t.developer.desc}</p>

            <ul className="developer-timeline">
              {t.developer.timeline.map((item, index) => (
                <li key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="developer-card">
            <img src="/logo_agora.png" alt="Agora City logo" />
            <h3>{t.developer.cardTitle}</h3>
            <p>{t.developer.cardDesc}</p>
          </div>
        </div>
      </section>

      <section className="section conclusion-section">
        <SectionLabel index={t.conclusion.index} kicker={t.conclusion.kicker} />

        <div className="conclusion-box">
          <p className="eyebrow">{t.conclusion.eyebrow}</p>
          <h2>{t.conclusion.title}</h2>

          <div className="conclusion-grid">
            {t.conclusion.grid.map(([title, desc]) => (
              <div key={title}>
                <strong>{title}</strong>
                <span>{desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section final-cta" id="contact">
        <div>
          <p className="eyebrow">{t.contact.eyebrow}</p>
          <h2>{t.contact.title}</h2>
          <p>{t.contact.desc}</p>

          <div className="cta-actions">
            <a href="#legal" className="btn btn--gold">
              {t.contact.primary}
            </a>
            <a href="#products" className="btn btn--dark">
              {t.contact.secondary}
            </a>
          </div>
        </div>

        <div className="contact-card">
          <h3>Agora City</h3>
          <p>{t.contact.address}</p>
          <p>{t.contact.phone}</p>
          <p>{t.contact.email}</p>
          <p>{t.contact.web}</p>
        </div>
      </section>
    </main>
  );
}

export default App;