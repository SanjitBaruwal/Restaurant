import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import ResuableHeader from "../../../components/ResuableHeader";
const FancyScroll = () => {
  const example = `<a href="#example-section" data-fancyscroll data-offset="70">Scroll to the #example-section below</a>

`;
  return (
    <div className="bg-[#F9FAFD] py-[110px] w-full px-10 lg:px-[5%] xl:px-[12.5%]">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-5 md:col-span-4 grid grid-cols-1 gap-4">
          <ResuableHeader
            title="Fancyscroll"
            desc="Restaurant-v1.0.0 includes a smooth scrolling plugin which allows you to animate the page's scrolling to elements within the page. The markup snippet below demonstrates:"
          />
          <div className="flex flex-col gap-4 rounded-lg overflow-hidden shadow-md">
            <h2
              className="p-4 text-xl bg-white text-black"
              style={{ fontFamily: "Merriweather, sans-serif" }}
            >
              Examples
            </h2>
            <div className="bg-[#F9FAFD] px-4 flex flex-col gap-2  ">
              <a className="hover:underline text-text" href="#example-section">
                Scroll to the #example-section below
              </a>
              <div className="select-text">
                <SyntaxHighlighter language="html" style={dracula}>
                  {example}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-lg overflow-hidden shadow-md">
            <h2
              className="p-4 text-xl bg-white text-black"
              style={{ fontFamily: "Merriweather, sans-serif" }}
            >
              The above link will scroll to this section.
            </h2>
            <div
              id="example-section"
              className="bg-[#F9FAFD] px-4 flex flex-col gap-2  "
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                delectus deleniti eius expedita explicabo, incidunt ipsa iste
                magnam nobis placeat praesentium reprehenderit sapiente
                similique voluptas voluptate. Accusamus, assumenda blanditiis
                commodi eligendi harum illo illum impedit incidunt laboriosam
                nobis qui rem repellat, tempora? A ab amet aspernatur
                consectetur cumque delectus, deleniti dolorum illo illum nihil
                nisi perspiciatis placeat porro praesentium quisquam recusandae
                reprehenderit sapiente sunt. A at aut consectetur consequuntur,
                culpa debitis delectus dicta eaque earum illo illum iste iusto,
                magni maxime minima minus odit omnis pariatur repellendus
                sapiente sunt vel voluptates. Aliquam consequuntur deleniti
                eaque et explicabo labore minus numquam optio perspiciatis,
                porro sed veritatis vitae! Asperiores atque consectetur culpa
                cupiditate dolorem ducimus eveniet exercitationem in maxime,
                nemo odio officia, omnis placeat quia quidem repellendus
                similique sit temporibus veniam vitae! Ab aliquid commodi
                consequatur culpa cum delectus dolore dolorem ea eveniet ex
                exercitationem fugiat illo in iure maiores modi molestiae nisi
                nostrum numquam odit officiis placeat quas quia quidem quisquam
                quo, reiciendis rerum sapiente soluta sunt tenetur ullam ut
                voluptas voluptate voluptatem voluptatibus voluptatum? Ab amet
                aspernatur at autem beatae cupiditate debitis dolore doloremque
                dolores eligendi et expedita fuga fugit harum incidunt labore
                minus nulla obcaecati quod quos, ut vero voluptatum! Alias amet
                aspernatur culpa debitis excepturi labore odit, perspiciatis qui
                saepe tempore! Adipisci aliquid at atque blanditiis
                consequuntur, corporis delectus deserunt distinctio dolorem
                dolores eius eum expedita fugiat hic illo impedit in ipsam ipsum
                iure iusto maxime modi nisi nulla omnis provident quaerat quasi
                quibusdam quod ratione reprehenderit saepe, sed sit suscipit
                tempore temporibus veniam voluptatibus? Amet animi autem culpa
                delectus deserunt dolores doloribus, enim expedita hic id ipsam
                maxime neque nesciunt nihil nostrum possimus, quis, quod
                reiciendis repellendus soluta! Accusamus alias aliquid amet
                asperiores consequatur cupiditate, delectus dignissimos dolore,
                doloremque doloribus eaque earum eius est et exercitationem
                expedita explicabo id illum in, inventore magnam magni maiores
                nemo non odit perspiciatis possimus quae qui quis saepe tempora
                vitae voluptates voluptatum. Accusamus aliquid, consequuntur
                deleniti eveniet explicabo id necessitatibus perferendis quidem
                soluta veritatis voluptas voluptate. Architecto consectetur
                culpa ducimus eaque error fugit harum maiores nisi provident
                quae, recusandae, sapiente vero? Ad aliquid corporis laudantium
                molestiae mollitia qui, repellat sequi sunt. Adipisci culpa
                cumque expedita, fugit harum hic, ipsum iure magni maiores omnis
                quis quod, repellendus saepe sint sit soluta ullam. Autem cum
                dolore doloremque ducimus exercitationem explicabo fugiat illo
                in, modi neque obcaecati omnis saepe, sequi totam voluptatum!
                Autem beatae dolorum ducimus, eligendi eos est excepturi facere
                facilis non nulla odit praesentium quas, quibusdam quis repellat
                reprehenderit similique veritatis voluptates. Aliquam
                consequatur enim molestias nihil nobis reiciendis reprehenderit!
                Ab ad aperiam at atque aut est, exercitationem, impedit
                laboriosam molestias necessitatibus odit perspiciatis, provident
                quia quibusdam reprehenderit! Ab dolores, nemo neque nesciunt
                optio quia quo voluptate. Ab animi, aperiam aspernatur debitis
                dicta eaque expedita fuga hic in incidunt, iure iusto libero
                natus nisi nobis praesentium repudiandae sapiente voluptatum! A
                alias assumenda commodi corporis cupiditate dicta ducimus earum
                est, fugiat incidunt inventore labore mollitia nihil nulla
                numquam optio perspiciatis possimus quam quisquam quod quos
                repellat repellendus sequi soluta tempora ut velit veniam vero
                voluptas voluptatum. Ad deserunt exercitationem ipsam minima
                natus nesciunt, nihil nisi officiis omnis, quos recusandae
                repudiandae. Aliquid deleniti, id! Consectetur deleniti ducimus
                repudiandae suscipit tempora tenetur vel! Aspernatur corporis
                eligendi esse est facere perspiciatis repellat vel. Ab animi
                consectetur cumque debitis dolore doloribus error eveniet
                expedita facilis, incidunt natus obcaecati omnis placeat quasi
                quia, quos repellat, reprehenderit sed suscipit unde veniam
                voluptate voluptatum! Consectetur cum cupiditate error maiores
                modi nesciunt nihil nobis velit. Atque non repellat tempora.
                Atque dolor eligendi eum illo ipsum minima, molestiae officiis,
                quos reiciendis sapiente unde voluptates. Aliquam aperiam
                architecto beatae consequatur consequuntur cum cumque debitis
                deleniti dolorem error fugit hic inventore ipsa ipsam ipsum iure
                maxime modi natus necessitatibus nemo nesciunt non obcaecati
                officia omnis optio perferendis possimus quasi qui quod quos
                reiciendis sapiente tenetur ullam, vel veniam voluptatem
                voluptatum! Ad cumque dolorem eius error exercitationem in
                molestias mollitia provident tempore velit! Blanditiis deserunt
                laborum numquam, placeat sit ut voluptates! Ab architecto autem
                consectetur cupiditate debitis ex nemo qui? In maiores quaerat
                sunt suscipit. Aperiam at atque blanditiis cum debitis dolore
                doloribus eligendi et ex explicabo fuga, fugiat ipsa iste itaque
                iure laboriosam laudantium minus nam nihil omnis quas quos
                repellat sequi similique soluta ullam voluptas. At deserunt
                dolorem eos eum harum minima molestiae non, omnis optio
                quibusdam, repellendus reprehenderit saepe sint ut voluptate.
                Blanditiis commodi corporis dicta, ea esse incidunt minus nobis
                quasi, quibusdam sapiente sequi temporibus, ullam. A ab
                assumenda deserunt dolor dolorem expedita explicabo facilis ipsa
                laborum molestias non placeat provident, quasi, quisquam
                sapiente sit ullam ut vel voluptas voluptatum. Ab accusamus ad
                aliquam atque corporis deserunt, dolor esse expedita, harum
                illum, incidunt ipsa odio officia pariatur possimus praesentium
                saepe sed tempora tenetur voluptatum. Autem beatae consequuntur
                ducimus facere iste maiores nulla pariatur praesentium quisquam
                voluptas! Consectetur ipsum quam tempore? Accusamus, adipisci
                consequatur corporis distinctio dolor dolorem dolores dolorum ea
                exercitationem facere harum id ipsa ipsum minima modi molestias
                mollitia natus nemo neque nesciunt optio placeat praesentium
                provident quibusdam quos recusandae rem, reprehenderit saepe
                ullam vel velit veniam veritatis voluptas! Ad alias animi,
                aperiam consequuntur cupiditate dolores ea eius eos et eveniet
                facilis hic id in ipsam itaque, iusto laboriosam molestias nemo
                neque nihil obcaecati odio perferendis possimus provident quam
                quia, quibusdam quidem quis ratione recusandae repellendus saepe
                sit tempore tenetur vel velit veniam. Ab adipisci aliquid at
                beatae, consequatur delectus dicta dignissimos dolorem earum eum
                harum hic itaque labore laborum laudantium magnam nam natus
                neque non perferendis quas qui rem sit tempora tempore,
                veritatis vero? Distinctio minima pariatur quisquam. Adipisci
                commodi illum ipsa iusto laboriosam numquam odit sint! Delectus,
                dicta illo impedit maiores pariatur porro quisquam repudiandae
                tempora tenetur? Asperiores autem beatae cupiditate deleniti
                dolores earum error et id, ipsa iste labore, molestiae nam nihil
                nobis nulla obcaecati perspiciatis porro provident quia quidem
                reprehenderit repudiandae saepe sed sequi ullam ut vitae
                voluptate. Blanditiis, debitis dolor dolorem, eaque explicabo
                facilis ipsa nemo nulla officia optio, quas qui quia tenetur
                vero vitae?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FancyScroll;
