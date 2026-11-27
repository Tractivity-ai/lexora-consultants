import Link from 'next/link';
import LeadForm from '@/components/LeadForm';
import Rail from '@/components/Rail';
import OnePage from '@/components/OnePage';
import Fx from '@/components/Fx';
import Footer from '@/components/Footer';
import { Arrow, Btn, MapPlaceholder } from '@/components/ui';
import { AREAS, WHO_SHORT, PHILOSOPHY, WHY, FOUNDERS, ARTICLES, SITE } from '@/lib/data';
import { FounderTile, AreaIcon } from '@/components/blocks';

const Ck = () => (
  <svg viewBox="0 0 26 26" aria-hidden="true"><circle cx="13" cy="13" r="12.4" /><path d="M7.5 13.5l4 4 7-8.5" /></svg>
);
const SP = [2, 1, 1, 1, 1, 2, 2, 2];
const PV = ['f', 'o', 't', 't', 'o', 'f', 'o', 't'];
const bg = (u, extra = {}) => ({ '--bg': `url(${u})`, ...extra });

export default function Home() {
  return (
    <>
      <Rail />
      <OnePage />
      <Fx />
      <div className="op-wrap">
        <div className="op-track">

          {/* HERO */}
          <section className="fd fd-half fd-hero" id="top" data-ch="Home" style={bg('/images/library.jpg')}>
            <div className="fd-img" aria-hidden="true" />
            <img className="hero-ph only-m" src="/images/library.jpg" alt="" />
            <div className="fd-pn">
              <div className="pillars" aria-hidden="true"><i /><i /><i /><i /><i /></div>
              <div className="fd-in">
                <p className="eyebrow hx hx1">Advocates &amp; Consultants · Nagpur</p>
                <div className="hm"><h1 className="hx hx2">Committed to protecting your rights with precision and dedication.</h1></div>
                <div className="fd-btns hx hx3">
                  <Btn href="/practice-areas" className="btn btn-w">Practice areas</Btn>
                  <Btn href="/contact" className="btn btn-ow">Contact the office</Btn>
                </div>
                <p className="hero-sub hx hx3">Bombay High Court, Nagpur Bench · District and Sessions Courts · Consumer forums and tribunals</p>
              </div>
            </div>
            <div className="hero-strip hx hx4"><div className="strip-in"><LeadForm variant="bar" /></div></div>
          </section>

          {/* PRACTICE */}
          <section className="fd fd-full fd-lt" id="practice" data-ch="Practice areas" style={bg('/images/courtroom.jpg', { '--bgp': '50% 60%' })}>
            <div className="fd-img" aria-hidden="true" />
            <div className="fd-pn"><div className="fd-in fd-wide">
              <div className="mk"><h2 className="h2" data-rv="rise">Practice Areas &amp; Services</h2></div>
              <div className="pgrid">
                {AREAS.map((a, i) => (
                  <Link href={`/practice-areas/${a.slug}`} className={`pg pg-${PV[i]}`} key={a.slug} data-rv="up" data-fx style={{ '--d': `${i * 0.09}s`, '--sp': SP[i] }}>
                    <span className="pg-ic"><AreaIcon d={a.icon} size={30} /></span>
                    <span className="pg-b"><h3>{a.t.replace(/:$/, '')}</h3><p>{a.short}</p></span>
                    <span className="pg-go"><Arrow /></span>
                  </Link>
                ))}
              </div>
            </div></div>
          </section>

          {/* WHO WE ARE */}
          <section className="fd fd-half fd-r" id="about" data-ch="Who we are" style={bg('/images/statue.jpg', { '--bgp': '30% 40%' })}>
            <div className="fd-img" aria-hidden="true" />
            <div className="fd-pn"><div className="fd-in">
              <div className="mk"><h2 className="h2" data-rv="rise">Who We Are</h2></div>
              <div className="fd-txt">
                {WHO_SHORT.map((t, i) => <p key={i} data-rv="up" style={{ '--d': `${0.1 + i * 0.12}s` }}>{t}</p>)}
              </div>
              <div className="fd-btns"><Btn href="/the-firm" className="btn btn-w">More about the firm</Btn></div>
            </div></div>
          </section>

          {/* FOUNDERS */}
          <section className="fd fd-full fd-lt" id="founders" data-ch="Founders" style={bg('/images/gavel.jpg', { '--bgp': '50% 50%' })}>
            <div className="fd-img" aria-hidden="true" />
            <div className="fd-pn"><div className="fd-in fd-wide">
              <div className="mk"><h2 className="h2" data-rv="rise">Founders Details</h2></div>
              <div className="g-fo fo-d">
                {FOUNDERS.map((f, i) => <FounderTile key={f.id} f={f} delay={i * 0.1} />)}
              </div>
            </div></div>
          </section>

          {/* PHILOSOPHY */}
          <section className="fd fd-half fd-ph" id="philosophy" data-ch="Philosophy" style={bg('/images/thinker.png', { '--bgs': 'contain', '--bgp': '78% 85%' })}>
            <div className="fd-img" aria-hidden="true" />
            <div className="fd-pn"><div className="fd-in">
              <div className="mk"><h2 className="h2" data-rv="rise">Philosophy And Working Approach</h2></div>
              <p className="fd-lead">{PHILOSOPHY.lead}</p>
              <ul className="phb-list">
                {PHILOSOPHY.items.map((t, i) => <li key={t} data-rv="up" data-fx style={{ '--d': `${i * 0.12}s`, '--i': i }}><span>{t}</span></li>)}
              </ul>
              <p className="phb-q" data-rv="up">{PHILOSOPHY.quote.replace(' ;', ';')}</p>
            </div></div>
          </section>

          {/* WHY */}
          <section className="fd fd-half fd-r fd-lt" id="why" data-ch="Why clients choose us" style={bg('/images/suit.jpg', { '--bgp': '40% 30%' })}>
            <div className="fd-img" aria-hidden="true" />
            <div className="fd-pn"><div className="fd-in">
              <div className="mk"><h2 className="h2" data-rv="rise">Why Clients Choose Us</h2></div>
              <div className="why-g">
                {WHY.map((w, i) => (
                  <div className={`wc${i === 0 ? ' wc-f' : ''}`} key={w} data-rv="up" data-fx style={{ '--d': `${i * 0.12}s` }}>
                    <span className="ck"><Ck /></span><span className="wc-t">{w}</span>
                  </div>
                ))}
              </div>
            </div></div>
          </section>

          {/* KNOW YOUR LAW */}
          <section className="fd fd-full" id="know" data-ch="Know your law" style={bg('/images/library.jpg', { '--bgp': '30% 50%' })}>
            <div className="fd-img" aria-hidden="true" />
            <div className="fd-pn"><div className="fd-in fd-wide">
              <div className="mk"><h2 className="h2" data-rv="rise">Know Your Law</h2></div>
              <div className="kgrid">
                {ARTICLES.map((a, i) => (
                  <Link href={`/knowledge-centre/${a.slug}`} className="kc3" key={a.slug} data-rv="up" style={{ '--d': `${i * 0.1}s` }}>
                    <span className="meta">{a.cat} · {a.date} · {a.rt}</span>
                    <span className="ttl">{a.t}</span>
                    <span className="ex">{a.ex}</span>
                    <span className="rd">Read article<Arrow /></span>
                  </Link>
                ))}
              </div>
              <div className="fd-btns"><Btn href="/knowledge-centre" className="btn btn-ow">All articles</Btn></div>
            </div></div>
          </section>

          {/* DISCUSS + OFFICE + FOOTER */}
          <section className="fd fd-full fd-end" id="contact" data-ch="Contact" style={bg('/images/courtroom.jpg', { '--bgp': '50% 40%' })}>
            <div className="fd-img" aria-hidden="true" />
            <div className="fd-pn"><div className="fd-in fd-wide">
              <div className="fin">
                <div>
                  <div className="mk"><h2 className="h2" data-rv="rise">Discuss a legal matter</h2></div>
                  <p className="fd-lead" data-rv="up">Call {SITE.phone1} / {SITE.phone2} or send an enquiry. The office responds on working days.</p>
                  <div className="fd-btns" data-rv="up" style={{ '--d': '.1s' }}>
                    <Btn href="/contact" className="btn btn-w">Send an enquiry</Btn>
                    <Btn href={`tel:${SITE.phone1Tel}`} className="btn btn-ow">Call the office</Btn>
                  </div>
                </div>
                <div className="fin-o">
                  <address>{SITE.address[0]}<br />{SITE.address[1]}</address>
                  <p><a href={`tel:${SITE.phone1Tel}`}>{SITE.phone1}</a> / <a href={`tel:${SITE.phone2Tel}`}>{SITE.phone2}</a><br /><a href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
                  <p className="fin-h">{SITE.hours}</p>
                  <div className="map" data-rv="wipe"><MapPlaceholder /></div>
                </div>
              </div>
              <Footer />
            </div></div>
          </section>

        </div>
      </div>
    </>
  );
}
