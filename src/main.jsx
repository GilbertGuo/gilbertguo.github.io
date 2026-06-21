import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  Baby,
  CakeSlice,
  Cat,
  ChevronRight,
  Clock,
  Coffee,
  Heart,
  Home as HomeIcon,
  MapPin,
  Milk,
  PawPrint,
  Phone,
  Sparkles,
  Star,
  Users,
} from 'lucide-react';
import './styles.css';

const navItems = ['Home', 'The Cats', 'Visit', 'Menu', 'Adopt'];

const cats = [
  {
    name: 'DuoDuo',
    breed: 'Ragdoll',
    status: 'Adoptable',
    copy: 'A dreamy girl who closes her eyes the moment you give her a face massage.',
    traits: ['Gentle', 'Cuddler'],
    action: 'Adopt me',
  },
  {
    name: 'Abao',
    breed: 'Bengal',
    copy: '100% powered by the teaser wand. Will sprint laps, then nap on your lap.',
    traits: ['Playful', 'Energetic'],
    action: 'Visit',
  },
  {
    name: 'Snowy',
    breed: 'British Shorthair',
    status: 'Adoptable',
    copy: 'A silver-shaded sweetheart, still learning that the world is safe and kind.',
    traits: ['Shy', 'Sweet'],
    action: 'Adopt me',
  },
  {
    name: 'Ice Cream',
    breed: 'Ragdoll',
    copy: 'On duty at the cafe most afternoons, waiting patiently for a chin scratch.',
    traits: ['Calm', 'Lap cat'],
    action: 'Visit',
  },
  {
    name: 'Monica',
    breed: 'British Shorthair',
    status: 'Adoptable',
    copy: 'Sleeps like a little child on your lap. Trust, in the shape of a cat.',
    traits: ['Trusting', 'Sleepy'],
    action: 'Adopt me',
  },
  {
    name: 'February',
    breed: 'British Shorthair',
    copy: 'A sleepy little kitten who dreams sweetly between bursts of mischief.',
    traits: ['Kitten', 'Curious'],
    action: 'Visit',
  },
];

const featuredCats = cats.slice(0, 3);
const adoptableCats = cats.filter((cat) => cat.status === 'Adoptable');

const catFilters = [
  { label: 'All', value: 'All', count: cats.length },
  { label: 'Ragdoll', value: 'Ragdoll', count: cats.filter((cat) => cat.breed === 'Ragdoll').length },
  { label: 'Bengal', value: 'Bengal', count: cats.filter((cat) => cat.breed === 'Bengal').length },
  {
    label: 'British Shorthair',
    value: 'British Shorthair',
    count: cats.filter((cat) => cat.breed === 'British Shorthair').length,
  },
  { label: 'Adoptable only', value: 'Adoptable', count: adoptableCats.length },
];

const reasons = [
  {
    icon: Sparkles,
    title: 'Healing by design',
    copy: 'Soft lighting, quiet corners and purring company to melt the stress away.',
  },
  {
    icon: Clock,
    title: 'No time limit',
    copy: 'Stay five minutes or five hours. Re-entry on the same day is always free.',
  },
  {
    icon: Milk,
    title: 'Treats & bubble tea',
    copy: 'Fresh-made cakes and signature milk teas, plus a treat to share with the cats.',
  },
  {
    icon: Heart,
    title: 'Adopt a friend',
    copy: 'Many of our rescues are looking for a forever home. Some may leave with you.',
  },
];

const drinks = [
  {
    name: 'Brown Sugar Milk Tea',
    badge: 'Signature',
    copy: 'Boba, fresh milk, warm brown sugar',
    price: '$6.50',
  },
  {
    name: 'Matcha Latte',
    copy: 'Stone-ground matcha, oat or dairy',
    price: '$6.00',
  },
  {
    name: 'Taro Milk Tea',
    copy: 'Real taro, lightly sweet',
    price: '$6.50',
  },
  {
    name: 'Honey Citron Tea',
    badge: 'Caffeine-free',
    copy: 'Soothing, served warm or iced',
    price: '$5.50',
  },
];

const cakes = [
  {
    name: 'Strawberry Shortcake',
    copy: 'Soft cream, fresh berries, cloud-light sponge',
    price: '$7.50',
  },
  {
    name: 'Basque Cheesecake',
    badge: 'Cafe favorite',
    copy: 'Caramelized top, creamy center',
    price: '$7.00',
  },
  {
    name: 'Tiramisu Cup',
    copy: 'Espresso-soaked layers and mascarpone',
    price: '$6.75',
  },
  {
    name: 'Cat Treat Cup',
    badge: 'For cats',
    copy: 'Special treats to share in the cat room',
    price: '$3.50',
  },
];

function App() {
  const [activeTab, setActiveTab] = useState('Home');

  const Page = useMemo(() => {
    return {
      Home,
      'The Cats': TheCats,
      Visit,
      Menu,
      Adopt,
    }[activeTab];
  }, [activeTab]);

  function switchTab(tab) {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <main>
      <nav className="nav" aria-label="Primary navigation">
        <button className="brand" type="button" onClick={() => switchTab('Home')} aria-label="Meow Woo Studio home">
          <img src="/pptx-assets/image-1-1.jpeg" alt="" />
          <span>Meow Woo Studio</span>
        </button>
        <div className="nav-links" role="tablist" aria-label="Website sections">
          {navItems.map((item) => (
            <button
              className={item === activeTab ? 'active' : ''}
              key={item}
              type="button"
              role="tab"
              aria-selected={item === activeTab}
              onClick={() => switchTab(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <button className="button nav-cta" type="button" onClick={() => switchTab('Visit')}>
          Plan your visit
        </button>
      </nav>

      <Page switchTab={switchTab} />
      <Footer switchTab={switchTab} />
    </main>
  );
}

function Home({ switchTab }) {
  return (
    <>
      <section className="hero home-hero">
        <div className="hero-copy">
          <p className="eyebrow">Richmond Hill · Cat Cafe</p>
          <h2 className="hero-title">Come get healed by cats</h2>
          <p className="soft-line">soft · cute · healing ♡</p>
          <p className="lede">
            Slow down with twenty gentle floofs, a warm cup of bubble tea, and a slice of cake.
            No time limit, no rush - stay as long as your heart needs.
          </p>
          <div className="hero-actions">
            <button className="button primary" type="button" onClick={() => switchTab('Visit')}>
              Plan your visit <ArrowRight size={18} />
            </button>
            <button className="button secondary" type="button" onClick={() => switchTab('The Cats')}>
              Meet the cats
            </button>
          </div>
          <section className="stats-strip" aria-label="Cafe highlights">
            <Stat value="20+" label="resident cats" />
            <Stat value="No limit" label="stay & relax" />
            <Stat value="11-11" label="open daily" />
          </section>
        </div>
        <CatShowcase label="Hero - cat & latte" />
      </section>

      <section className="section feature-section">
        <div className="section-heading">
          <p className="eyebrow">Why a visit feels good</p>
          <h2>A little pause, with paws</h2>
        </div>
        <div className="feature-grid">
          {reasons.map(({ icon: Icon, title, copy }) => (
            <article className="feature-card" key={title}>
              <Icon size={28} />
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section warm-band">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">Say hello</p>
            <h2>Meet a few of the floofs</h2>
          </div>
          <button className="button secondary" type="button" onClick={() => switchTab('The Cats')}>
            See all cats
          </button>
        </div>
        <CatGrid cats={featuredCats} switchTab={switchTab} compact />
      </section>

      <Cta switchTab={switchTab} />
    </>
  );
}

function TheCats({ switchTab }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const visibleCats = cats.filter((cat) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Adoptable') return cat.status === 'Adoptable';
    return cat.breed === activeFilter || cat.traits.includes(activeFilter);
  });

  return (
    <>
      <section className="page-hero cats-hero">
        <p className="eyebrow">The resident floofs</p>
        <h2 className="page-title">Twenty soft hearts, all waiting for you</h2>
        <p className="lede">
          Each cat has their own personality. Some will leap into your lap; some prefer a quiet hello.
          All of them are vaccinated, loved, and very well fed.
        </p>
      </section>

      <section className="filter-row" aria-label="Cat category filters">
        {catFilters.map((filter) => (
          <button
            className={activeFilter === filter.value ? 'active' : ''}
            key={filter.value}
            type="button"
            aria-pressed={activeFilter === filter.value}
            onClick={() => setActiveFilter(filter.value)}
          >
            {filter.label} {filter.count ? <strong>{filter.count}</strong> : null}
          </button>
        ))}
      </section>

      <section className="section no-top">
        <CatGrid cats={visibleCats} switchTab={switchTab} onFilter={setActiveFilter} activeFilter={activeFilter} />
      </section>
    </>
  );
}

function Visit() {
  const [guestCount, setGuestCount] = useState('2');
  const [reservationStatus, setReservationStatus] = useState('');

  function handleReservationSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name')?.toString().trim();
    const email = formData.get('email')?.toString().trim();

    if (!name || !email) {
      setReservationStatus('Please add your name and email so we can hold your spot.');
      return;
    }

    setReservationStatus(`Thanks, ${name}! Your visit for ${guestCount} guest${guestCount === '1' ? '' : 's'} is noted. We will confirm by email.`);
    event.currentTarget.reset();
  }

  return (
    <>
      <section className="hero visit-hero">
        <div className="hero-copy">
          <p className="eyebrow">Plan your visit</p>
          <h2 className="page-title">Drop by whenever - walk-ins always welcome</h2>
          <p className="lede">
            Every ticket includes a drink and a treat to share with the cats. No time limit, and re-entry on
            the same day is free. Reserve below if you are bringing a group.
          </p>
          <div className="visit-details">
            <Info icon={Clock} title="Hours" copy="11 AM - 11 PM, every day" />
            <Info icon={MapPin} title="Location" copy="9555 Yonge St, Unit 25, Richmond Hill, ON" />
            <Info icon={Phone} title="Call us" copy="905-508-6363" />
          </div>
        </div>
        <CatShowcase label="Cafe interior" />
      </section>

      <section className="visit-booking">
        <div className="admission-panel">
          <h2>Admission</h2>
          <div className="price-row">
            <div>
              <strong>Adult</strong>
              <span>Unlimited cat-room time</span>
            </div>
            <strong>$19.99</strong>
          </div>
          <div className="price-row">
            <div>
              <strong>Child</strong>
              <span>Ages 4-12, supervised</span>
            </div>
            <strong>$17.50</strong>
          </div>
          <ul className="check-list">
            <li>Drink included</li>
            <li>Treat to feed the cats</li>
            <li>No time limit</li>
          </ul>
        </div>

        <div className="booking-panel">
          <form className="reserve-form" onSubmit={handleReservationSubmit}>
            <h3>Reserve a spot</h3>
            <label>
              <span className="label-row">Your name <span>*</span></span>
              <input type="text" name="name" required />
            </label>
            <label>
              <span className="label-row">Email <span>*</span></span>
              <input type="email" name="email" required />
            </label>
            <label>
              How many guests?
              <span className="guest-options" role="group" aria-label="How many guests">
                {['1', '2', '3', '4', '5+'].map((guest) => (
                  <button
                    className={guestCount === guest ? 'active' : ''}
                    key={guest}
                    type="button"
                    aria-pressed={guestCount === guest}
                    onClick={() => setGuestCount(guest)}
                  >
                    {guest}
                  </button>
                ))}
              </span>
              <input type="hidden" name="guests" value={guestCount} />
            </label>
            <label>
              Notes (optional)
              <textarea name="notes" rows="3" />
            </label>
            <button className="button primary" type="submit">Reserve my visit</button>
            {reservationStatus && (
              <p className={reservationStatus.startsWith('Thanks') ? 'form-message success' : 'form-message error'} role="status">
                {reservationStatus}
              </p>
            )}
            <p className="form-note">Walk-ins welcome too - booking just guarantees seats.</p>
          </form>
        </div>
      </section>
    </>
  );
}

function Menu() {
  const [menuTab, setMenuTab] = useState('Drinks');
  const items = menuTab === 'Drinks' ? drinks : cakes;

  return (
    <>
      <section className="page-hero menu-hero">
        <p className="eyebrow">Sip, nibble, relax</p>
        <h2 className="page-title">Bubble tea & cakes, made daily</h2>
        <p className="lede">
          One drink comes with every visit. Everything is freshly made - pick a flavour,
          and take whatever you do not finish home.
        </p>
      </section>

      <section className="menu-section">
        <div className="segmented-control" role="tablist" aria-label="Menu categories">
          {['Drinks', 'Cakes & treats'].map((item) => (
            <button
              className={menuTab === item ? 'active' : ''}
              key={item}
              type="button"
              role="tab"
              aria-selected={menuTab === item}
              onClick={() => setMenuTab(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="menu-list">
          {items.map((item) => (
            <article className="menu-item" key={item.name}>
              <span className="menu-icon">ฅ</span>
              <div>
                <h3>{item.name}</h3>
                {item.badge && <span className="badge">{item.badge}</span>}
                <p>{item.copy}</p>
              </div>
              <strong>{item.price}</strong>
            </article>
          ))}
        </div>
        <p className="menu-note">psst - the cats do not get cake, only their special treats ♡</p>
      </section>
    </>
  );
}

function Adopt({ switchTab }) {
  return (
    <>
      <section className="hero adopt-hero">
        <div className="hero-copy">
          <p className="eyebrow">Adopt, do not shop</p>
          <h2 className="page-title">Some hellos become forever</h2>
          <p className="lede">
            Several of our rescues are looking for a forever home. They are vaccinated,
            gently socialised, and very loved. Adoption helps us welcome the next cat in need.
          </p>
          <button className="button primary" type="button" onClick={() => switchTab('Visit')}>
            Come meet them <ArrowRight size={18} />
          </button>
        </div>
        <CatShowcase label="Rescue cat" />
      </section>

      <section className="steps adopt-steps" aria-label="Adoption process">
        <Step number="Step 1" title="Spend time together" copy="Visit and meet the cats. See who chooses you." />
        <Step number="Step 2" title="Apply" copy="Tell us about your home over a short, friendly form." />
        <Step number="Step 3" title="Bring them home" copy="We help with the transition, supplies and check-ins." />
      </section>

      <section className="section adopt-listing">
        <div className="section-heading">
          <p className="eyebrow">Looking for a home right now</p>
          <h2>Ready to be loved</h2>
        </div>
        <CatGrid cats={adoptableCats} switchTab={switchTab} adoption />
      </section>
    </>
  );
}

function CatShowcase({ label, small = false }) {
  return (
    <div className={small ? 'cat-showcase small' : 'cat-showcase'} aria-label={label}>
      <img src="/pptx-assets/image-1-1.jpeg" alt="Meow Woo Studio logo" />
      <div className="cat-face">ฅ^•ﻌ•^ฅ</div>
      <p>{label}</p>
      {!small && (
        <div className="drink-badge">
          <span>🍵</span>
          <strong>Drink</strong>
          <small>included with every visit</small>
        </div>
      )}
    </div>
  );
}

function Stat({ value, label }) {
  return (
    <div className="stat">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

function CatGrid({ cats: catList, switchTab, compact = false, adoption = false, onFilter, activeFilter = 'All' }) {
  return (
    <div className={compact ? 'cat-grid compact' : 'cat-grid'}>
      {catList.map((cat) => (
        <article className="cat-card" key={cat.name}>
          <div className="cat-portrait">
            {cat.status && <TagButton className="status portrait-status" label={cat.status} value="Adoptable" onFilter={onFilter} activeFilter={activeFilter} />}
            <span className="cat-symbol">ฅ^•ﻌ•^ฅ</span>
            <small>{cat.name.toUpperCase()} - {cat.breed.toUpperCase()}</small>
          </div>
          <div className="cat-name-row">
            <h3>{cat.name}</h3>
            <TagButton className="breed tag-text" label={cat.breed} value={cat.breed} onFilter={onFilter} activeFilter={activeFilter} />
          </div>
          <p>{cat.copy}</p>
          {!compact && !adoption && (
            <div className="traits">
              {cat.traits.map((trait) => (
                <TagButton key={trait} label={trait} value={trait} onFilter={onFilter} activeFilter={activeFilter} />
              ))}
            </div>
          )}
          <button className="text-link" type="button" onClick={() => switchTab(cat.status ? 'Adopt' : 'Visit')}>
            {adoption ? `Ask about ${cat.name}` : cat.action} <ChevronRight size={16} />
          </button>
        </article>
      ))}
    </div>
  );
}

function TagButton({ label, value, className = '', onFilter, activeFilter }) {
  if (!onFilter) {
    return <span className={className}>{label}</span>;
  }

  return (
    <button
      className={`${className} tag-button ${activeFilter === value ? 'active' : ''}`.trim()}
      type="button"
      aria-pressed={activeFilter === value}
      onClick={() => onFilter(value)}
    >
      {label}
    </button>
  );
}

function Info({ icon: Icon, title, copy }) {
  return (
    <article className="info-card">
      <Icon size={24} />
      <div>
        <h3>{title}</h3>
        <p>{copy}</p>
      </div>
    </article>
  );
}

function Step({ number, title, copy }) {
  return (
    <article className="step-card">
      <span>{number}</span>
      <h3>{title}</h3>
      <p>{copy}</p>
    </article>
  );
}

function Cta({ switchTab }) {
  return (
    <section className="cta">
      <div>
        <p className="eyebrow">your cosy corner is waiting</p>
        <h2>Come sit with the cats today</h2>
      </div>
      <div className="hero-actions">
        <button className="button primary" type="button" onClick={() => switchTab('Visit')}>Plan your visit</button>
        <button className="button secondary" type="button" onClick={() => switchTab('Menu')}>See the menu</button>
      </div>
    </section>
  );
}

function Footer({ switchTab }) {
  return (
    <footer>
      <div className="footer-inner">
        <section className="footer-brand">
          <img src="/pptx-assets/image-1-1.jpeg" alt="Meow Woo Studio" />
          <h2>Come get healed by cats ♡</h2>
          <p>A calm, no-rush cat cafe in Richmond Hill. Soft. Cute. Healing.</p>
        </section>
        <section>
          <h3>Explore</h3>
          {navItems.map((item) => (
            <button key={item} type="button" onClick={() => switchTab(item)}>{item}</button>
          ))}
        </section>
        <section>
          <h3>Visit us</h3>
          <p>9555 Yonge St, Unit 25, Richmond Hill, ON</p>
          <p>11 AM - 11 PM, every day</p>
          <p>905-508-6363</p>
        </section>
      </div>
      <p className="copyright">© 2026 Meow Woo Studio · Made with love (and lots of treats)</p>
    </footer>
  );
}

createRoot(document.getElementById('root')).render(<App />);
