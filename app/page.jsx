import Link from 'next/link';
import LeadForm from '@/components/LeadForm';
import { Arrow, Btn, BookIcon, MapPlaceholder } from '@/components/ui';
import { AREAS, WHO, PHILOSOPHY, WHY, FOUNDERS, ARTICLES, SITE } from '@/lib/data';
import { Rich, AreaIcon, FounderTile } from '@/components/blocks';

export default function Home() {
  return (
    <>
      {/* HERO: only fold one */}
      <div className="herofold">
        <section className="hero">
          <div className="hero-art" aria-hidden="true">
            <img className="room" src="/images/courtroom.jpg" alt="" />
          </div>
          <div className="hero-in">
            <div className="hero-copy">
              <p className="eyebrow up">Advocates &amp; Consultants · Nagpur</p>
              <h1 className="up">Committed to protecting your rights <em>with precision and dedication.</em></h1>
              <p className="addr up" style={{ animationDelay: '.1s' }}>{SITE.address[0]} {SITE.address[1]}</p>
              <div className="hero-btns up" style={{ animationDelay: '.18s' }}>
                <Btn href="/practice-areas" className="btn btn-w">Practice areas</Btn>
                <Btn href="/contact" className="btn btn-ow">Contact the office</Btn>
              </div>
              <LeadForm className="only-m" />
            </div>
          </div>
        </section>
        <div className="formbar only-d"><div className="wrap"><LeadForm variant="bar" /></div></div>
      </div>

      {/* WHO WE ARE */}
      <section className="fold" id="about">
        <div className="wrap">
          <h2 className="h2 tab">Who We Are</h2>
          <div className="g-who">
            {WHO.map((para, i) => <div className="sc" key={i}><p><Rich parts={para} /></p></div>)}
          </div>
          <Btn href="/the-firm">More about the firm</Btn>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="fold tint" id="philosophy">
        <div className="wrap">
          <h2 className="h2 tab">Philosophy And Working Approach</h2>
          <p style={{ margin: '20px 0 0', maxWidth: 560 }}>{PHILOSOPHY.lead}</p>
          <div className="g-ph">
            {PHILOSOPHY.items.map((i) => <div className="sc" key={i}><p>{i}</p></div>)}
          </div>
          <p className="phq">{PHILOSOPHY.quote.replace(' ;', ';')}</p>
        </div>
      </section>

      {/* PRACTICE AREAS */}
      <section className="fold" id="practice">
        <div className="wrap">
          <h2 className="h2 tab">Practice Areas &amp; Services</h2>
          <div className="g-pa">
            {AREAS.map((a, i) => (
              <div className="pa" key={a.slug} style={{ animationDelay: `${0.04 + i * 0.05}s` }}>
                <span className="num">{a.n}</span>
                <span className="pi"><AreaIcon d={a.icon} /></span>
                <Link href={`/practice-areas/${a.slug}`} className="pc2">
                  <h3>{a.t.replace(/:$/, '')}</h3>
                  <p>{a.short}</p>
                  <span className="more">Read more<Arrow /></span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CLIENTS CHOOSE US */}
      <section className="fold tint" id="why">
        <div className="wrap">
          <h2 className="h2 tab">Why Clients Choose Us</h2>
          <div className="why-rows">
            {WHY.map((w) => (
              <div className="wr" key={w}>
                <span className="ck" aria-hidden="true"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5 9-10" /></svg></span>
                <span>{w}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="fold" id="founders">
        <div className="wrap">
          <h2 className="h2 tab">Founders Details</h2>
          <div className="g-fo">
            {FOUNDERS.map((f, i) => <FounderTile key={f.id} f={f} delay={i * 0.08} />)}
          </div>
        </div>
      </section>

      {/* KNOW YOUR LAW */}
      <section className="fold" id="know">
        <div className="wrap">
          <h2 className="h2 tab">Know Your Law</h2>
          <div className="g-know">
            {ARTICLES.map((a, i) => (
              <Link href={`/knowledge-centre/${a.slug}`} className="kc" key={a.t} style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="kt" style={{ background: a.bg }}><span className="c">{a.cat}</span><span className="ki"><BookIcon /></span></div>
                <div className="kb">
                  <span style={{ fontSize: 13, color: '#5B5958' }}>{a.date} · {a.rt}</span>
                  <span className="h3 ttl" style={{ fontSize: 17 }}>{a.t}</span>
                  <span style={{ display: 'block', marginTop: 10, fontSize: 14, lineHeight: 1.6 }}>{a.ex}</span>
                  <span style={{ display: 'block', marginTop: 12, fontSize: 13, color: '#5B5958' }}>{a.au}</span>
                  <span className="btn btn-g">Read article<Arrow /></span>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ marginTop: 20 }}><Btn href="/knowledge-centre">All articles</Btn></div>
        </div>
      </section>

      {/* CTA */}
      <section className="fold">
        <div className="wrap">
          <div className="cta">
            <div style={{ flex: 1, minWidth: 0 }}>
              <h2 className="h2">Discuss a legal matter</h2>
              <p>Call {SITE.phone1} / {SITE.phone2} or send an enquiry. The office responds on working days.</p>
            </div>
            <div className="acts">
              <Btn href="/contact" className="btn btn-k">Send an enquiry</Btn>
              <Btn href={`tel:${SITE.phone1Tel}`} className="btn btn-o">Call the office</Btn>
            </div>
          </div>
        </div>
      </section>

      {/* OFFICE */}
      <section className="fold">
        <div className="wrap">
          <div className="office">
            <div>
              <h2 className="h2 tab">The Office</h2>
              <address style={{ fontStyle: 'normal', marginTop: 20 }}>{SITE.address[0]}<br />{SITE.address[1]}</address>
              <p style={{ margin: '12px 0 0' }}><a href={`tel:${SITE.phone1Tel}`}>{SITE.phone1}</a> / <a href={`tel:${SITE.phone2Tel}`}>{SITE.phone2}</a><br /><a href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
              <p style={{ margin: '12px 0 0', color: '#5B5958' }}>{SITE.hours}</p>
              <div style={{ marginTop: 18 }}><Btn href="/contact">Get directions</Btn></div>
            </div>
            <div className="map"><MapPlaceholder /></div>
          </div>
        </div>
      </section>
    </>
  );
}
