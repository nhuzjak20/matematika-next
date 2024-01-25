import Link from "next/link";
import "./globals.scss";

export default function Home() {
  return (
    <>
      <div className="stars">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>
      <div className="grid grid-cols-3 grid-rows-3 gap-3">
        <div className="grid row-span-1">
          <div class="container grid-span-2 ">
            <Link href="/v3produkt" legacyBehavior>
              <a class="card1 glassy-background">
                <h3>This is option 1</h3>
                <p class="small">
                  Card description with lots of great facts and interesting
                  details.
                </p>
                <div class="go-corner" href="#">
                  <div class="go-arrow">→</div>
                </div>
              </a>
            </Link>
          </div>
        </div>
        <div className="grid row-span-3">c</div>
      </div>
    </>
  );
}
