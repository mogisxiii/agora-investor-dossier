import "./App.css";

const executiveStats = [
  {
    value: "127ha",
    label: "Quy mô đại đô thị",
    note: "Quỹ đất lớn, đủ điều kiện hình thành một trung tâm đô thị mới.",
  },
  {
    value: "2.011",
    label: "Sản phẩm toàn khu",
    note: "Cơ cấu gồm shophouse, nhà phố, biệt thự và căn hộ.",
  },
  {
    value: "100%",
    label: "Nền đất có sổ riêng",
    note: "Điểm then chốt để nhà đầu tư kiểm tra trước khi xuống tiền.",
  },
  {
    value: "48+",
    label: "Tiện ích nội khu",
    note: "Tạo nền tảng cho an cư, kinh doanh và khai thác dòng tiền.",
  },
];

const riskQuestions = [
  {
    code: "RISK-01",
    question: "Đất có sổ riêng chưa?",
    investorPain:
      "Nhà đầu tư sợ nhất là mua tài sản không đứng tên được hoặc phải chờ pháp lý kéo dài.",
    agoraAnswer:
      "Agora City được định vị với 100% nền đất có sổ riêng, giúp người mua có cơ sở kiểm tra trước khi giao dịch.",
    status: "Có cơ sở kiểm chứng",
  },
  {
    code: "RISK-02",
    question: "Có thể sang tên được không?",
    investorPain:
      "Một tài sản không thể sang tên sẽ làm giảm thanh khoản và tăng rủi ro khi cần bán lại.",
    agoraAnswer:
      "Catalogue ghi khách hàng giao dịch được sang tên ngay trên sổ.",
    status: "Ưu tiên kiểm tra hồ sơ",
  },
  {
    code: "RISK-03",
    question: "Có được phép xây dựng không?",
    investorPain:
      "Nhiều nhà đầu tư mua đất nhưng không khai thác được vì vướng quy định xây dựng.",
    agoraAnswer:
      "Catalogue ghi 100% nền đất được cấp phép xây dựng.",
    status: "Có thông tin cấp phép",
  },
  {
    code: "RISK-04",
    question: "Hạ tầng có hiện hữu không?",
    investorPain:
      "Nhà đầu tư không muốn mua một lời hứa. Họ cần thấy đường, tiện ích, công trình và khả năng vận hành thật.",
    agoraAnswer:
      "Dự án có trung tâm hành chính 5ha đã hoàn thành, đại lộ 818 và hệ thống tiện ích đang được triển khai.",
    status: "Có bằng chứng hiện trạng",
  },
  {
    code: "RISK-05",
    question: "Ai sẽ tạo nhu cầu mua lại hoặc thuê?",
    investorPain:
      "Nếu không có lực cầu thật, đất nền có thể tăng chậm hoặc khó thanh khoản.",
    agoraAnswer:
      "Agora nằm gần cụm khoảng 30 KCN, trung tâm hành chính và các trục kết nối liên vùng.",
    status: "Có động lực cầu",
  },
  {
    code: "RISK-06",
    question: "Dự án có đủ lý do để giữ dài hạn không?",
    investorPain:
      "Nhà đầu tư cần một tài sản có nhiều lớp bảo vệ giá trị, không chỉ trông chờ sóng thị trường.",
    agoraAnswer:
      "Pháp lý, hành chính, công nghiệp, thương mại, giao thông và ba mặt giáp sông tạo thành luận điểm đầu tư dài hạn.",
    status: "Có luận điểm đầu tư",
  },
];

const legalDataRoom = [
  {
    code: "LEGAL-01",
    title: "Hồ sơ sổ riêng",
    img: "/4.jpg",
    summary:
      "Tập hợp tài liệu giúp nhà đầu tư kiểm tra quyền sử dụng đất và khả năng đứng tên tài sản.",
    documents: [
      "Mẫu giấy chứng nhận quyền sử dụng đất",
      "Danh mục nền/sản phẩm có pháp lý riêng",
      "Thông tin điều kiện giao dịch từng sản phẩm",
    ],
    investorUse:
      "Dùng để trả lời câu hỏi quan trọng nhất: Tôi mua xong có đứng tên được không?",
  },
  {
    code: "LEGAL-02",
    title: "Hồ sơ quy hoạch",
    img: "/5.jpg",
    summary:
      "Nhóm tài liệu giúp kiểm tra quy hoạch tổng thể, lộ giới, phân khu và công năng sử dụng đất.",
    documents: [
      "Bản đồ quy hoạch tổng mặt bằng",
      "Thông tin đường 818 lộ giới 40m",
      "Thông tin đường phía Bắc thị trấn lộ giới 24m",
    ],
    investorUse:
      "Dùng để đánh giá đất có nằm đúng vị trí, đúng chức năng và đúng định hướng đô thị không.",
  },
  {
    code: "LEGAL-03",
    title: "Hồ sơ nghĩa vụ tài chính",
    img: "/6.jpg",
    summary:
      "Nhóm tài liệu thể hiện dự án đã hoàn thành các nghĩa vụ quan trọng liên quan đến đất đai.",
    documents: [
      "Xác nhận hoàn thành nghĩa vụ tài chính",
      "Thông tin liên quan tiền sử dụng đất",
      "Biên mục hồ sơ phục vụ đối chiếu khi tư vấn",
    ],
    investorUse:
      "Dùng để giảm rủi ro mua tài sản còn tồn đọng nghĩa vụ tài chính.",
  },
  {
    code: "LEGAL-04",
    title: "Hồ sơ cấp phép xây dựng",
    img: "/7.jpg",
    summary:
      "Nhóm tài liệu giúp nhà đầu tư kiểm tra khả năng triển khai xây dựng, kinh doanh hoặc khai thác tài sản.",
    documents: [
      "Thông tin cấp phép xây dựng",
      "Quy chuẩn xây dựng theo từng loại sản phẩm",
      "Mặt bằng công năng shophouse/nhà phố",
    ],
    investorUse:
      "Dùng để trả lời câu hỏi: Mua xong có thể xây, vận hành hoặc khai thác được không?",
  },
  {
    code: "LEGAL-05",
    title: "Hồ sơ điều kiện giao dịch",
    img: "/8.jpg",
    summary:
      "Bộ hồ sơ giải thích quy trình đặt chỗ, ký hợp đồng, thanh toán, công chứng và sang tên.",
    documents: [
      "Quy trình giao dịch",
      "Điều kiện ký hợp đồng",
      "Các mốc thanh toán và bàn giao hồ sơ",
    ],
    investorUse:
      "Dùng để giúp nhà đầu tư biết chính xác tiền đi đến đâu, giấy tờ đi đến đâu.",
  },
  {
    code: "LEGAL-06",
    title: "Hồ sơ chủ đầu tư",
    img: "/9.jpg",
    summary:
      "Tập hợp thông tin về Thủ Thừa Invest, kinh nghiệm triển khai và các dự án đã tham gia.",
    documents: [
      "Hồ sơ năng lực chủ đầu tư",
      "Danh mục dự án đã triển khai",
      "Thông tin đội ngũ chuyên gia, kỹ sư, kiến trúc sư",
    ],
    investorUse:
      "Dùng để đánh giá đây có phải đơn vị có năng lực triển khai thật hay không.",
  },
];

const investmentThesis = [
  {
    id: "THESIS-01",
    title: "Pháp lý rõ là lớp bảo vệ vốn đầu tiên",
    img: "/thesis-legal.jpg",
    headline: "Trước khi nghĩ đến lợi nhuận, nhà đầu tư phải bảo vệ vốn.",
    body:
      "Trong đầu tư đất nền, pháp lý là nền móng. Một tài sản có hồ sơ rõ, có sổ riêng, có khả năng sang tên và có cơ sở xây dựng sẽ giúp nhà đầu tư giảm rủi ro lớn nhất: mua phải tài sản khó chuyển nhượng hoặc không khai thác được.",
    points: [
      "Giảm rủi ro mất thanh khoản do pháp lý mập mờ",
      "Tăng niềm tin khi cần bán lại",
      "Tăng khả năng thuyết phục người mua thứ cấp",
    ],
  },
  {
    id: "THESIS-02",
    title: "Trung tâm hành chính tạo nhu cầu hiện hữu",
    img: "/11.jpg",
    headline: "Dòng người đến từ hành chính là dòng cầu bền hơn sóng đầu cơ.",
    body:
      "Trung tâm hành chính 5ha nằm trong lòng Agora City là một lợi thế hiếm. Khi hành chính vận hành, khu vực xung quanh thường hình thành nhu cầu ăn uống, dịch vụ, lưu trú, văn phòng, nhà ở và thương mại phụ trợ.",
    points: [
      "Tạo lưu lượng người sử dụng thật",
      "Tăng khả năng khai thác shophouse",
      "Giúp dự án không chỉ phụ thuộc vào cư dân tương lai",
    ],
  },
  {
    id: "THESIS-03",
    title: "Công nghiệp tạo lực cầu thuê và ở thật",
    img: "/12.jpg",
    headline: "Đất nền tốt cần có lực cầu sử dụng, không chỉ lực cầu mua bán.",
    body:
      "Agora được giới thiệu nằm tại khu vực gần khoảng 30 khu công nghiệp. Đây là nền tảng quan trọng để hình thành nhu cầu ở, thuê, kinh doanh dịch vụ và tích sản dài hạn từ chuyên gia, kỹ sư, chủ doanh nghiệp và lao động chất lượng cao.",
    points: [
      "Cầu thuê từ chuyên gia và kỹ sư",
      "Cầu dịch vụ từ khu công nghiệp",
      "Cầu tích sản từ nhóm thu nhập ổn định",
    ],
  },
  {
    id: "THESIS-04",
    title: "Thương mại giúp tài sản có lý do khai thác",
    img: "/13.jpg",
    headline: "Co.opmart, phố đi bộ và tiện ích nội khu làm tăng tính sử dụng.",
    body:
      "Một khu đất có thương mại và tiện ích sẽ dễ hình thành thói quen sử dụng hơn một khu đất chỉ có phân lô. Với Co.opmart, phố đi bộ, clubhouse, nhà hàng và công viên, Agora có câu chuyện khai thác rõ hơn cho nhóm shophouse và nhà phố.",
    points: [
      "Tăng khả năng kinh doanh tầng trệt",
      "Tăng điểm đến cho cư dân và khách vãng lai",
      "Tạo lý do giữ tài sản dài hạn",
    ],
  },
  {
    id: "THESIS-05",
    title: "Giao thông là nền tảng thanh khoản",
    img: "/14.jpg",
    headline: "Vị trí tốt không chỉ để đi lại, mà để tài sản dễ bán lại.",
    body:
      "Mặt tiền đại lộ 818 lộ giới 40m, kết nối nhanh đến cao tốc TP.HCM - Trung Lương và các trục liên vùng giúp Agora có lợi thế kết nối. Với nhà đầu tư, kết nối tốt đồng nghĩa tệp khách mua lại rộng hơn.",
    points: [
      "Kết nối TP.HCM, Tân An, Bến Lức",
      "Tăng khả năng tiếp cận người mua thứ cấp",
      "Tạo lợi thế cho thương mại mặt tiền",
    ],
  },
];

const evidenceItems = [
  {
    img: "/1.jpg",
    label: "EVIDENCE-01",
    title: "Tổng quan đại đô thị",
    note:
      "Sử dụng để mở hồ sơ, tạo cảm giác đây là một tài sản quy mô lớn, không phải dự án nhỏ lẻ.",
  },
  {
    img: "/2.jpg",
    label: "EVIDENCE-02",
    title: "Bối cảnh pháp lý",
    note:
      "Dùng ở phần Legal First để nhấn mạnh kiểm tra hồ sơ trước khi mua.",
  },
  {
    img: "/3.jpg",
    label: "EVIDENCE-03",
    title: "Checklist thẩm định",
    note:
      "Dùng để mô phỏng quy trình nhà đầu tư tự rà soát tài sản.",
  },
  {
    img: "/15.jpg",
    label: "EVIDENCE-04",
    title: "Hồ sơ sản phẩm",
    note:
      "Dùng cho phần shophouse, nhà phố, sản phẩm khai thác thương mại.",
  },
  {
    img: "/16.jpg",
    label: "EVIDENCE-05",
    title: "Bằng chứng bổ sung",
    note:
      "Dùng làm ảnh dự phòng cho section tiến độ, hình ảnh thực tế hoặc tài liệu pháp lý.",
  },
];

const productStrategies = [
  {
    type: "Nhà đầu tư giữ tài sản dài hạn",
    product: "Nhà phố / nền vị trí ổn định",
    logic:
      "Phù hợp với người ưu tiên pháp lý, khả năng sang tên và giá trị tích lũy theo sự phát triển của trung tâm hành chính.",
    image: "/15.jpg",
  },
  {
    type: "Nhà đầu tư khai thác kinh doanh",
    product: "Shophouse trục thương mại",
    logic:
      "Phù hợp với người muốn tận dụng lưu lượng từ hành chính, tiện ích, Co.opmart và phố đi bộ.",
    image: "/13.jpg",
  },
  {
    type: "Nhà đầu tư cho thuê",
    product: "Sản phẩm gần trung tâm hành chính",
    logic:
      "Phù hợp với nhu cầu cho thuê văn phòng nhỏ, lưu trú, dịch vụ ăn uống hoặc kinh doanh phụ trợ.",
    image: "/11.jpg",
  },
  {
    type: "Nhà đầu tư đón lực cầu KCN",
    product: "Nhà phố / shophouse dễ tiếp cận trục chính",
    logic:
      "Phù hợp với chiến lược đón chuyên gia, kỹ sư, nhà cung ứng và nhóm khách có nhu cầu ở thật.",
    image: "/12.jpg",
  },
];

const developerTimeline = [
  "Đội ngũ hơn 20 năm kinh nghiệm",
  "Tham gia các dự án tại TP.HCM, Đồng Nai, Lâm Đồng, Thái Nguyên",
  "Long Tân City - Nhơn Trạch, Đồng Nai",
  "Hiệp Thành City - Quận 12",
  "Khu đô thị Điền Phước - Nhơn Trạch, Đồng Nai",
  "Nam Phương City - Bảo Lộc, Lâm Đồng",
  "Agora City - Trung tâm hành chính Thủ Thừa",
];

function SectionLabel({ index, kicker }) {
  return (
    <div className="section-label">
      <span>{index}</span>
      <p>{kicker}</p>
    </div>
  );
}

function App() {
  return (
    <main className="investor-site" id="top">
      <header className="investor-nav">
        <a href="#top" className="brand">
          <img src="/logo_agora.png" alt="Agora City" />
          <span>Investor Dossier Demo</span>
        </a>

        <nav>
          <a href="#summary">Tóm tắt</a>
          <a href="#checklist">Checklist</a>
          <a href="#legal">Pháp lý</a>
          <a href="#thesis">Luận điểm</a>
          <a href="#products">Sản phẩm</a>
        </nav>

        <a href="#dataroom" className="nav-cta">
          Xem Khu hồ sơ pháp lý
        </a>
      </header>

      <section className="dossier-hero">
        <div className="hero-copy">
          <p className="eyebrow">Agora City Investor Dossier Demo</p>

          <h1>
            Hồ sơ thẩm định đầu tư đất nền trung tâm hành chính Thủ Thừa.
          </h1>

          <p className="hero-lead">
            Dành cho nhà đầu tư muốn kiểm tra pháp lý, sổ riêng, khả năng sang
            tên, hạ tầng hiện hữu và động lực tăng trưởng trước khi quyết định.
          </p>

          <div className="hero-warning">
            <strong>Nguyên tắc của hồ sơ này:</strong>
            <span>
              Không mua vì lời quảng cáo. Chỉ ra quyết định sau khi kiểm tra
              được hồ sơ, bằng chứng và lý do bảo vệ giá trị tài sản.
            </span>
          </div>

          <div className="hero-actions">
            <a href="#checklist" className="btn btn--gold">
              Bắt đầu kiểm tra hồ sơ
            </a>
            <a href="#thesis" className="btn btn--dark">
              Xem luận điểm đầu tư
            </a>
          </div>
        </div>

        <div className="hero-media">
          <img src="/1.jpg" alt="Agora City tổng quan đại đô thị" />
          <div className="media-card">
            <span>Core Advantage</span>
            <strong>Pháp lý minh bạch là ưu thế cạnh tranh tuyệt đối.</strong>
          </div>
        </div>
      </section>

      <section className="executive-strip" id="summary">
        {executiveStats.map((item) => (
          <article key={item.label}>
            <strong>{item.value}</strong>
            <h3>{item.label}</h3>
            <p>{item.note}</p>
          </article>
        ))}
      </section>

      <section className="section intro-section">
        <SectionLabel index="01" kicker="Market Problem" />

        <div className="intro-grid">
          <div>
            <h2>Nhà đầu tư đất nền không thiếu dự án để xem. Họ thiếu một tài sản đủ rõ để xuống tiền.</h2>
            <p>
              Trong thị trường bất động sản, rất nhiều landing page chỉ cố chứng
              minh dự án đẹp. Nhưng nhà đầu tư nghiêm túc thường không ra quyết
              định vì phối cảnh. Họ ra quyết định khi rủi ro pháp lý được làm
              rõ, hồ sơ được trình bày đầy đủ và luận điểm đầu tư đủ thuyết phục.
            </p>
            <p>
              Vì vậy, Agora City không nên được trình bày như một trang bán hàng.
              Agora cần được trình bày như một bộ hồ sơ thẩm định tài sản: có
              danh mục, có hồ sơ đầu tư, có bằng chứng, có luận điểm đầu tư và có
              cơ chế giúp khách tự kiểm tra.
            </p>
          </div>

          <div className="risk-panel">
            <h3>5 lý do nhà đầu tư thường mất tiền khi mua đất nền</h3>
            <ul>
              <li>Không kiểm tra được sổ riêng và khả năng sang tên.</li>
              <li>Mua theo lời hứa tiện ích thay vì bằng chứng hiện trạng.</li>
              <li>Không hiểu quy hoạch, lộ giới và điều kiện xây dựng.</li>
              <li>Không xác định được ai sẽ tạo lực cầu thuê hoặc mua lại.</li>
              <li>Đánh giá dự án bằng cảm xúc thay vì hồ sơ pháp lý.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section checklist-section" id="checklist">
        <SectionLabel index="02" kicker="Investor Checklist" />

        <div className="section-heading">
          <h2>7 câu hỏi nhà đầu tư phải trả lời trước khi mua đất Agora City.</h2>
          <p>
            Đây là phần quan trọng nhất của landing page. Thay vì thúc khách để
            lại số điện thoại ngay, website phải giúp khách tự kiểm tra các rủi
            ro lớn nhất trước. Khi câu trả lời rõ, nhu cầu tư vấn sẽ tự nhiên hơn.
          </p>
        </div>

        <div className="question-grid">
          {riskQuestions.map((item) => (
            <article className="question-card" key={item.code}>
              <div className="card-topline">
                <span>{item.code}</span>
                <strong>{item.status}</strong>
              </div>
              <h3>{item.question}</h3>
              <div className="qa-block">
                <p>
                  <b>Nỗi lo của khách:</b> {item.investorPain}
                </p>
                <p>
                  <b>Agora trả lời:</b> {item.agoraAnswer}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="checklist-result">
          <span>Investor Readiness Score</span>
          <strong>6 / 6 nhóm tiêu chí có cơ sở trình bày</strong>
          <p>
            Mục tiêu không phải là nói khách “hãy tin”. Mục tiêu là cho khách
            đủ dữ liệu để tự thấy: Agora có nhiều lớp kiểm chứng hơn một dự án
            đất nền thông thường.
          </p>
        </div>
      </section>

      <section className="section legal-section" id="legal">
        <SectionLabel index="03" kicker="Khu hồ sơ pháp lý" />

        <div className="section-heading">
          <h2>Phòng hồ sơ pháp lý: biến nỗi sợ lớn nhất thành lý do mua mạnh nhất.</h2>
          <p>
            Với đất nền, pháp lý không phải là một phần phụ. Pháp lý chính là
            sản phẩm. Khi nhà đầu tư thấy hồ sơ được tổ chức như một Khu hồ sơ pháp lý,
            cảm giác rủi ro giảm xuống và mức độ tin cậy tăng lên.
          </p>
        </div>

        <div className="data-room-grid" id="dataroom">
          {legalDataRoom.map((item) => (
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
                  <b>Nhà đầu tư dùng để:</b>
                  <p>{item.investorUse}</p>
                </div>

                <a href="#contact" className="mini-link">
                  Yêu cầu xem hồ sơ
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section thesis-section" id="thesis">
        <SectionLabel index="04" kicker="Investment Thesis" />

        <div className="section-heading">
          <h2>5 luận điểm khiến Agora không chỉ là đất nền, mà là một tài sản có lý do nắm giữ.</h2>
          <p>
            Một nhà đầu tư nghiêm túc không mua vì “nghe nói sẽ tăng giá”. Họ
            mua khi hiểu rõ những lực kéo có thể bảo vệ giá trị tài sản qua thời
            gian: pháp lý, hành chính, công nghiệp, thương mại và giao thông.
          </p>
        </div>

        <div className="thesis-stack">
          {investmentThesis.map((item) => (
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
        <SectionLabel index="05" kicker="Evidence Library" />

        <div className="section-heading">
          <h2>Bằng chứng hình ảnh: mỗi luận điểm phải có một tài liệu hoặc hình ảnh đi kèm.</h2>
          <p>
            Chuẩn ProfileLAB không để chữ đứng một mình. Nếu nói có trung tâm
            hành chính, cần ảnh. Nếu nói có quy hoạch, cần bản đồ. Nếu nói có
            sản phẩm khai thác, cần mặt bằng. Nếu nói có pháp lý, cần hồ sơ.
          </p>
        </div>

        <div className="evidence-grid">
          {evidenceItems.map((item) => (
            <figure className="evidence-card" key={item.label}>
              <img src={item.img} alt={item.title} />
              <figcaption>
                <span>{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.note}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section masterplan-section">
        <SectionLabel index="06" kicker="Urban Logic" />

        <div className="masterplan-layout">
          <div>
            <h2>Agora phải được đọc như một cấu trúc đô thị, không phải một bảng hàng.</h2>
            <p>
              Một dự án đất nền đáng đầu tư cần có trật tự đô thị: trục chính,
              trung tâm hành chính, tiện ích thương mại, khu ở, khu khai thác
              dịch vụ và các điểm tạo dòng người. Khi trình bày đúng, nhà đầu tư
              sẽ hiểu vì sao từng vị trí trong dự án có vai trò khác nhau.
            </p>

            <div className="urban-points">
              <div>
                <strong>Hành chính</strong>
                <span>Tạo dòng người sử dụng ổn định.</span>
              </div>
              <div>
                <strong>Thương mại</strong>
                <span>Tạo nhu cầu kinh doanh và dịch vụ.</span>
              </div>
              <div>
                <strong>Nhà ở</strong>
                <span>Tạo cộng đồng cư dân và nhu cầu tiêu dùng.</span>
              </div>
              <div>
                <strong>Giao thông</strong>
                <span>Tạo khả năng tiếp cận và thanh khoản.</span>
              </div>
            </div>
          </div>

          <div className="masterplan-image">
            <img src="/14.jpg" alt="Mặt bằng tổng thể Agora City" />
          </div>
        </div>
      </section>

      <section className="section product-strategy" id="products">
        <SectionLabel index="07" kicker="Product Strategy" />

        <div className="section-heading">
          <h2>Không bán sản phẩm trước khi khách hiểu chiến lược đầu tư.</h2>
          <p>
            Khi khách đã hiểu pháp lý và luận điểm tăng trưởng, lúc đó mới giới
            thiệu sản phẩm. Cách giới thiệu đúng không phải “anh mua căn này đi”,
            mà là “anh thuộc nhóm nhà đầu tư nào, sản phẩm nào phù hợp với mục tiêu đó”.
          </p>
        </div>

        <div className="strategy-grid">
          {productStrategies.map((item) => (
            <article className="strategy-card" key={item.type}>
              <img src={item.image} alt={item.product} />
              <div>
                <span>{item.type}</span>
                <h3>{item.product}</h3>
                <p>{item.logic}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section product-detail-section">
        <SectionLabel index="08" kicker="Product Facts" />

        <div className="product-detail-grid">
          <article className="product-fact-card">
            <img src="/15.jpg" alt="Shophouse căn góc Agora City" />
            <div>
              <span>PRODUCT-01</span>
              <h3>Shophouse / Nhà phố căn góc</h3>
              <p>
                Kích thước lô đất 7.5m x 17/22m, diện tích đất 152m², diện tích
                xây dựng 521m². Phù hợp với nhà đầu tư cần vị trí nổi bật, khả
                năng nhận diện thương mại cao và công năng vừa ở vừa kinh doanh.
              </p>
            </div>
          </article>

          <article className="product-fact-card">
            <img src="/16.jpg" alt="Shophouse liền kề Agora City" />
            <div>
              <span>PRODUCT-02</span>
              <h3>Shophouse / Nhà phố liền kề</h3>
              <p>
                Kích thước lô đất 6m x 22m, diện tích đất 132m², diện tích xây
                dựng 468.5m². Phù hợp với chiến lược tích sản, khai thác tầng
                trệt hoặc cho thuê theo nhu cầu khu hành chính và thương mại.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="section developer-section">
        <SectionLabel index="09" kicker="Developer Profile" />

        <div className="developer-layout">
          <div>
            <h2>Hồ sơ chủ đầu tư: yếu tố giúp nhà đầu tư đánh giá khả năng triển khai.</h2>
            <p>
              Một dự án không chỉ được đánh giá bằng vị trí và bản vẽ. Nhà đầu
              tư cần biết ai đứng sau dự án, đội ngũ có kinh nghiệm không, đã
              từng triển khai những dự án nào và có đủ năng lực đưa cam kết
              thành hiện trạng hay không.
            </p>

            <ul className="developer-timeline">
              {developerTimeline.map((item, index) => (
                <li key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="developer-card">
            <img src="/logo_agora.png" alt="Agora City logo" />
            <h3>Thủ Thừa Invest</h3>
            <p>
              Định vị dự án theo phương châm “nói thật - làm thật”, tập trung
              vào pháp lý, hiện trạng và giá trị sử dụng thay vì chỉ dựa vào
              kỳ vọng tương lai.
            </p>
          </div>
        </div>
      </section>

      <section className="section conclusion-section">
        <SectionLabel index="10" kicker="Investment Conclusion" />

        <div className="conclusion-box">
          <p className="eyebrow">Nếu chỉ nhớ một điều về Agora City</p>
          <h2>
            Đây không phải là dự án yêu cầu nhà đầu tư tin vào lời quảng cáo.
            Đây là dự án cần được kiểm tra như một tài sản nhiều tỷ đồng.
          </h2>

          <div className="conclusion-grid">
            <div>
              <strong>Pháp lý</strong>
              <span>Có cơ sở để kiểm chứng trước khi mua.</span>
            </div>
            <div>
              <strong>Hiện trạng</strong>
              <span>Có trung tâm hành chính, hạ tầng và tiện ích làm bằng chứng.</span>
            </div>
            <div>
              <strong>Lực cầu</strong>
              <span>Đến từ hành chính, công nghiệp, thương mại và kết nối vùng.</span>
            </div>
            <div>
              <strong>Sản phẩm</strong>
              <span>Phù hợp tích sản, kinh doanh, cho thuê và khai thác dài hạn.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section final-cta" id="contact">
        <div>
          <p className="eyebrow">Investor Action</p>
          <h2>Yêu cầu xem hồ sơ trước khi quyết định xuống tiền.</h2>
          <p>
            Nhà đầu tư nghiêm túc nên bắt đầu bằng việc xem hồ sơ pháp lý, mặt
            bằng, quy trình giao dịch, chính sách sản phẩm và hình ảnh hiện
            trạng. Sau đó mới đến bước chọn vị trí và đàm phán phương án đầu tư.
          </p>

          <div className="cta-actions">
            <a href="#legal" className="btn btn--gold">
              Xem Khu hồ sơ pháp lý
            </a>
            <a href="#products" className="btn btn--dark">
              Xem chiến lược sản phẩm
            </a>
          </div>
        </div>

        <div className="contact-card">
          <h3>Agora City</h3>
          <p>Khu phố 11, Xã Thủ Thừa, Tỉnh Tây Ninh</p>
          <p>Hotline: 0925 45 55 65</p>
          <p>Email: info@thuthua.com.vn</p>
          <p>Website: agoracity.vn</p>
        </div>
      </section>
    </main>
  );
}

export default App;