import Link from 'next/link';
import LeadForm from '@/components/LeadForm';
import { Arrow, Btn, Icon, BookIcon } from '@/components/ui';
import { AREAS, COURTS, ARTICLES, ADVOCATES, SITE, TAX } from '@/lib/data';

const VAR = ['va', 'vb', 'vc'];

function PhoneTile() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* HERO: the only thing in the first fold */}
      <div className="herofold">
        <section className="hero">
          <img className="hero-bg" src="/images/hero.jpg" alt="A law library desk with books, case files and a brass scale" />
          <div className="hero-fade" />
          <div className="hero-in">
            <div className="hero-copy">
              <p className="eyebrow up">Advocates &amp; Consultants, Nagpur</p>
              <h1 className="up" style={{ animationDelay: '.08s' }}>Litigation, legal advisory and tax compliance in Nagpur.</h1>
              <p className="hero-p up" style={{ animationDelay: '.16s' }}>We advise and represent individuals and businesses before the District and Sessions Court, Nagpur, the Bombay High Court at Nagpur, and tax and other tribunals.</p>
              <div className="hero-btns up" style={{ animationDelay: '.22s' }}>
                <Btn href="/practice-areas">Practice areas</Btn>
                <Btn href="/contact">Contact the office</Btn>
              </div>
              <LeadForm className="only-m" />
            </div>
          </div>
        </section>
        <div className="formbar only-d">
          <div className="wrap"><LeadForm variant="bar" /></div>
        </div>
      </div>

      {/* OUR SERVICES */}
      <section className="fold" id="services">
        <div className="wrap">
          <h2 className="h2">Our services</h2>
          <div className="g-svc">
            <Link href="/practice-areas" className="sv" style={{ background: '#F6F5F2' }}>
              <span className="bg-ic"><svg width="170" height="170" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth=".8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 9l9-5 9 5z M5 11v7 M9 11v7 M15 11v7 M19 11v7 M3 20h18" /></svg></span>
              <span className="tile" style={{ background: '#fff' }}><Icon f="M3 9l9-5 9 5z" p="M3 9l9-5 9 5z M5 11v7 M9 11v7 M15 11v7 M19 11v7 M3 20h18" /></span>
              <h3 className="h2" style={{ marginTop: 20 }}>Litigation and legal advisory</h3>
              <p style={{ margin: '10px 0 0', maxWidth: '46ch' }}>Representation before trial courts, the High Court and tribunals, with advice on the documents and decisions that come before them.</p>
              <ul>{['Civil and property matters', 'Criminal defence', 'Family and matrimonial matters', 'Consumer, labour and service matters', 'Cheque bounce and writ petitions'].map((i) => <li key={i}>{i}</li>)}</ul>
              <span className="btn btn-g" style={{ background: '#fff' }}>See all<Arrow /></span>
            </Link>
            <Link href="/practice-areas/tax-and-compliance" className="sv" style={{ background: '#E7E5E0', borderColor: '#CFCCC5', animationDelay: '.12s' }}>
              <span className="bg-ic"><svg width="170" height="170" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth=".8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={TAX.p} /></svg></span>
              <span className="tile" style={{ background: '#F6F5F2', borderColor: '#CFCCC5' }}><Icon f={TAX.f} p={TAX.p} fill="#CFCCC5" /></span>
              <h3 className="h2" style={{ marginTop: 20 }}>Tax and compliance</h3>
              <p style={{ margin: '10px 0 0', maxWidth: '46ch' }}>GST and income tax work handled alongside the legal side, so notices, returns and appeals sit with one office.</p>
              <ul>{['GST registration and returns', 'GST notices, audits and appeals', 'Income tax returns', 'Tax audit', 'Business and statutory compliance'].map((i) => <li key={i}>{i}</li>)}</ul>
              <span className="btn btn-g">See all<Arrow /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="about-img"><img src="/images/about-sign.jpg" alt="The Lexora Advocates and Consultants sign" /></div>
        <div className="about-tx">
          <div>
            <h2 className="h2">About Lexora</h2>
            <p>Lexora combines courtroom practice with tax and compliance advisory, so a matter that has both a legal and a tax side stays with one office.</p>
            <p>The firm also publishes Know Your Law explainers, short guides that put the law in plain language. The founders are Adv. Adesh Thakur, who holds an LL.M. in Business and Corporate Law, and Adv. Shreyash Kumbhalkar, who holds a B.A. LL.B.</p>
            <div style={{ marginTop: 18 }}><Btn href="/the-firm">More about the firm</Btn></div>
          </div>
        </div>
      </section>

      {/* PRACTICE AREAS */}
      <section className="fold bgp" id="practice">
        <div className="wrap">
          <h2 className="h2">Practice areas</h2>
          <div className="grid g-areas">
            {AREAS.map((a, i) => (
              <Link key={a.slug} href={`/practice-areas/${a.slug}`} className={`card ${VAR[i % 3]}`} style={{ animationDelay: `${0.04 + i * 0.06}s` }}>
                <span className="tile"><Icon f={a.f} p={a.p} /></span>
                <span className="ct"><span className="h3" style={{ display: 'block' }}>{a.t}</span><p>{a.d}</p></span>
                <Arrow />
                <span className="bar" />
              </Link>
            ))}
          </div>
          <Link href="/practice-areas/tax-and-compliance" className="card wide tint" style={{ background: '#E7E5E0', borderColor: '#CFCCC5' }}>
            <span className="tile" style={{ background: '#F6F5F2', borderColor: '#CFCCC5' }}><Icon f={TAX.f} p={TAX.p} fill="#CFCCC5" /></span>
            <span className="ct"><span className="h3" style={{ display: 'block' }}>Tax and compliance</span><p style={{ color: '#4A4A4A' }}>GST registration and returns, notices and appeals, income tax returns, tax audit and statutory compliance.</p></span>
            <Arrow />
          </Link>
          <div style={{ marginTop: 20 }}><Btn href="/practice-areas">All practice areas</Btn></div>
        </div>
      </section>

      {/* WHERE WE PRACTISE */}
      <section className="fold">
        <div className="wrap">
          <h2 className="h2">Where we practise</h2>
          <div className="grid g-courts">
            {COURTS.map((c, i) => (
              <div key={c.t} className={`card tint ${['va', 'vb', 'vc', 'va'][i]}`} style={{ background: c.bg, animationDelay: `${0.04 + i * 0.06}s` }}>
                <span className="tile" style={{ background: '#fff' }}><Icon f={c.f} p={c.p} /></span>
                <span className="ct"><small>{c.cap}</small><span className="h3" style={{ display: 'block', marginTop: 4 }}>{c.t}</span></span>
                <span className="bar" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR ADVOCATES */}
      <section className="fold advs" id="advocates">
        <div className="wrap">
          <h2 className="h2">Our advocates</h2>
          <div className="g-pc">
            {ADVOCATES.map((a, i) => (
              <div className="pc" key={a.name} style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="ph"><img src={a.img} alt={a.name} /><div className="fd" /><span className="chip">Founder</span></div>
                <div className="pb">
                  <div className="h3" style={{ fontSize: 22 }}>{a.name}</div>
                  <div style={{ fontSize: 14, color: '#6B6B6B' }}>Founder, Advocate</div>
                  <p>{a.qual}</p>
                  <p className="sm">{a.focus}</p>
                  <div style={{ marginTop: 16 }}><Btn href={`/our-people#${a.id}`}>View profile</Btn></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KNOW YOUR LAW */}
      <section className="fold" id="know">
        <div className="wrap">
          <h2 className="h2">Know your law</h2>
          <div className="g-know">
            {ARTICLES.map((a, i) => (
              <Link href={`/knowledge-centre/${a.slug}`} className="kc" key={a.t} style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="kt" style={{ background: a.bg }}><span className="c">{a.cat}</span><span className="ki"><BookIcon /></span></div>
                <div className="kb">
                  <span style={{ fontSize: 14, color: '#6B6B6B' }}>{a.date} · {a.rt}</span>
                  <span className="h3 ttl">{a.t}</span>
                  <span style={{ display: 'block', marginTop: 10, fontSize: 15, lineHeight: 1.55 }}>{a.ex}</span>
                  <span style={{ display: 'block', marginTop: 12, fontSize: 14, color: '#6B6B6B' }}>{a.au}</span>
                  <span className="btn btn-g">Read article<Arrow /></span>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ marginTop: 20 }}><Btn href="/knowledge-centre">All articles</Btn></div>
        </div>
      </section>

      {/* CTA */}
      <section className="fold bgp">
        <div className="wrap">
          <div className="cta">
            <span className="bg-ic"><svg width="190" height="190" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth=".8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={TAX.p} /></svg></span>
            <span className="tile" style={{ background: '#F6F5F2', borderColor: '#CFCCC5' }}><PhoneTile /></span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <h2 className="h2">Discuss a legal or tax matter</h2>
              <p>Call {SITE.phone1} or send an enquiry. The office responds on working days.</p>
            </div>
            <div className="acts">
              <Btn href="/contact">Send an enquiry</Btn>
              <Btn href={`tel:${SITE.phone1Tel}`}>Call the office</Btn>
            </div>
          </div>
        </div>
      </section>

      {/* OFFICE */}
      <section className="fold">
        <div className="wrap">
          <div className="office">
            <div>
              <h2 className="h2">The office</h2>
              <address style={{ fontStyle: 'normal', marginTop: 16 }}>{SITE.address[0]}<br />{SITE.address[1]}</address>
              <p style={{ margin: '12px 0 0' }}><a href={`tel:${SITE.phone1Tel}`}>{SITE.phone1}</a><br /><a href="tel:+918805241341">{SITE.phone2}</a></p>
              <p style={{ margin: '12px 0 0', color: '#6B6B6B' }}>{SITE.hours}</p>
              <div style={{ marginTop: 18 }}><Btn href="/contact">Get directions</Btn></div>
            </div>
            <div className="map"><MapSvg /></div>
          </div>
        </div>
      </section>
    </>
  );
}

import { MapPlaceholder as MapSvg } from '@/components/ui';
