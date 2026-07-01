/* @ds-bundle: {"format":3,"namespace":"ImproovHomesDesignSystem_738607","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Avatar","sourcePath":"components/data/Avatar.jsx"},{"name":"Card","sourcePath":"components/data/Card.jsx"},{"name":"StatCard","sourcePath":"components/data/StatCard.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"Tag","sourcePath":"components/feedback/Tag.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"9d37d5e5f9df","components/data/Avatar.jsx":"296788e250cc","components/data/Card.jsx":"9d6544870765","components/data/StatCard.jsx":"92992389ecaa","components/feedback/Badge.jsx":"4fbae5873909","components/feedback/ProgressBar.jsx":"b64eeade9d5e","components/feedback/Tag.jsx":"c3060444e4b8","components/feedback/Toast.jsx":"c8abb6516c1e","components/forms/Button.jsx":"cb5e9bd85f72","components/forms/Checkbox.jsx":"1b078d5a0f0d","components/forms/IconButton.jsx":"be41d68b22f2","components/forms/Input.jsx":"81253c9451e4","components/forms/Radio.jsx":"79c37a57b528","components/forms/Select.jsx":"aa68297229fb","components/forms/Switch.jsx":"2179303beb97","components/navigation/Tabs.jsx":"a18d872a154a","ui_kits/improov-app/icons.jsx":"406440a10181","ui_kits/improov-app/screens.jsx":"f7584a6941d4"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ImproovHomesDesignSystem_738607 = window.ImproovHomesDesignSystem_738607 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
/**
 * Improov Homes — Logo
 * Renders the official wordmark or the IH app mark from the asset library.
 * `base` is the relative path to the project root from the consuming page.
 */
function Logo({
  variant = 'wordmark',
  height = 40,
  base = '.',
  style = {}
}) {
  const map = {
    wordmark: 'assets/logos/improov-logo-primary.png',
    mark: 'assets/logos/favicon-cherry.png',
    'mark-green': 'assets/logos/favicon-green.png',
    'mark-roofline': 'assets/logos/favicon-roofline-cherry.png'
  };
  const src = `${base}/${map[variant] || map.wordmark}`;
  return /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "Improov Homes",
    style: {
      height,
      width: 'auto',
      display: 'block',
      ...style
    }
  });
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/data/Avatar.jsx
try { (() => {
/**
 * Improov Homes — Avatar
 * Circular image or initials. Color cycles through the brand palette.
 */
function Avatar({
  src,
  name = '',
  size = 40,
  color,
  style = {}
}) {
  const palette = ['var(--color-cherry)', 'var(--color-blue)', 'var(--green-500)', 'var(--color-purple)', 'var(--color-orange)'];
  const initials = name.split(' ').map(p => p[0]).filter(Boolean).slice(0, 2).join('').toUpperCase();
  const bg = color || palette[(name.charCodeAt(0) || 0) % palette.length];
  const base = {
    width: size,
    height: size,
    borderRadius: '50%',
    flexShrink: 0,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    fontFamily: 'var(--font-ui)',
    fontWeight: 700,
    fontSize: size * 0.4,
    color: '#fff',
    background: bg,
    boxShadow: 'inset 0 0 0 2px rgba(255,255,255,0.25)',
    ...style
  };
  if (src) {
    return /*#__PURE__*/React.createElement("span", {
      style: base
    }, /*#__PURE__*/React.createElement("img", {
      src: src,
      alt: name,
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }
    }));
  }
  return /*#__PURE__*/React.createElement("span", {
    style: base,
    title: name
  }, initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data/Card.jsx
try { (() => {
/**
 * Improov Homes — Card
 * The base surface. White, soft shadow, rounded. Optional top accent strip.
 */
function Card({
  children,
  padding = 20,
  accent,
  interactive = false,
  style = {}
}) {
  const accents = {
    cherry: 'var(--brand)',
    blue: 'var(--color-blue)',
    green: 'var(--green-500)',
    yellow: 'var(--yellow-500)',
    purple: 'var(--color-purple)',
    orange: 'var(--color-orange)'
  };
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      overflow: 'hidden',
      transform: hover ? 'translateY(-2px)' : 'none',
      transition: 'box-shadow var(--duration-normal) var(--ease-standard), transform var(--duration-normal) var(--ease-standard)',
      cursor: interactive ? 'pointer' : 'default',
      ...style
    }
  }, accent && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 5,
      background: accents[accent] || accent
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Card.jsx", error: String((e && e.message) || e) }); }

// components/data/StatCard.jsx
try { (() => {
/**
 * Improov Homes — StatCard
 * A headline metric with label and optional delta — for dashboards.
 */
function StatCard({
  label,
  value,
  delta,
  deltaDir = 'up',
  icon,
  color = 'cherry',
  style = {}
}) {
  const colors = {
    cherry: 'var(--brand)',
    blue: 'var(--color-blue)',
    green: 'var(--green-500)',
    yellow: 'var(--yellow-600)',
    purple: 'var(--color-purple)'
  };
  const softs = {
    cherry: 'var(--cherry-50)',
    blue: 'var(--blue-50)',
    green: 'var(--green-50)',
    yellow: 'var(--yellow-50)',
    purple: '#EDECF6'
  };
  const c = colors[color] || colors.cherry;
  const up = deltaDir === 'up';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sm)',
      padding: 20,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 700,
      fontSize: 'var(--text-xs)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 'var(--radius-md)',
      background: softs[color] || 'var(--cherry-50)',
      color: c,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, icon)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 700,
      fontSize: 'var(--text-2xl)',
      color: 'var(--text-strong)',
      lineHeight: 1
    }
  }, value), delta != null && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      fontFamily: 'var(--font-ui)',
      fontWeight: 700,
      fontSize: 'var(--text-sm)',
      color: up ? 'var(--success)' : 'var(--danger)'
    }
  }, /*#__PURE__*/React.createElement("span", null, up ? '▲' : '▼'), delta));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
/**
 * Improov Homes — Badge
 * Small status pill. Tone maps to the semantic palette.
 */
function Badge({
  children,
  tone = 'neutral',
  solid = false,
  style = {}
}) {
  const tones = {
    neutral: {
      soft: 'var(--neutral-100)',
      fg: 'var(--neutral-700)',
      solid: 'var(--neutral-700)'
    },
    cherry: {
      soft: 'var(--cherry-50)',
      fg: 'var(--cherry-600)',
      solid: 'var(--brand)'
    },
    blue: {
      soft: 'var(--blue-50)',
      fg: 'var(--blue-600)',
      solid: 'var(--color-blue)'
    },
    green: {
      soft: 'var(--green-50)',
      fg: 'var(--green-600)',
      solid: 'var(--green-500)'
    },
    yellow: {
      soft: 'var(--yellow-50)',
      fg: 'var(--yellow-700)',
      solid: 'var(--yellow-500)'
    },
    success: {
      soft: 'var(--success-soft)',
      fg: 'var(--success)',
      solid: 'var(--success)'
    },
    danger: {
      soft: 'var(--danger-soft)',
      fg: 'var(--danger)',
      solid: 'var(--danger)'
    }
  };
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '3px 10px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-ui)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--text-xs)',
      letterSpacing: '0.02em',
      lineHeight: 1.4,
      background: solid ? t.solid : t.soft,
      color: solid ? '#fff' : t.fg,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
/**
 * Improov Homes — ProgressBar
 * Track + fill. Great for affordability / savings-goal meters.
 */
function ProgressBar({
  value = 0,
  max = 100,
  color = 'cherry',
  label,
  showValue = false,
  height = 10,
  style = {}
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  const colors = {
    cherry: 'var(--brand)',
    blue: 'var(--color-blue)',
    green: 'var(--green-500)',
    yellow: 'var(--yellow-500)',
    purple: 'var(--color-purple)'
  };
  const c = colors[color] || colors.cherry;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-ui)',
      ...style
    }
  }, (label || showValue) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 'var(--text-sm)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-strong)'
    }
  }, label), showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, Math.round(pct), "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height,
      background: 'var(--neutral-200)',
      borderRadius: 'var(--radius-pill)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${pct}%`,
      height: '100%',
      background: c,
      borderRadius: 'var(--radius-pill)',
      transition: 'width var(--duration-slow) var(--ease-standard)'
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tag.jsx
try { (() => {
/**
 * Improov Homes — Tag
 * Removable / selectable chip, e.g. property filters.
 */
function Tag({
  children,
  color = 'neutral',
  selected = false,
  onRemove,
  onClick,
  style = {}
}) {
  const colors = {
    neutral: 'var(--neutral-500)',
    cherry: 'var(--brand)',
    blue: 'var(--color-blue)',
    green: 'var(--green-500)',
    yellow: 'var(--yellow-600)',
    purple: 'var(--color-purple)',
    orange: 'var(--color-orange)'
  };
  const c = colors[color] || colors.neutral;
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      padding: '6px 12px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-ui)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--text-sm)',
      border: `2px solid ${selected ? c : 'var(--border-default)'}`,
      background: selected ? c : 'transparent',
      color: selected ? '#fff' : 'var(--text-body)',
      cursor: onClick ? 'pointer' : 'default',
      transition: 'all var(--duration-fast) var(--ease-standard)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: selected ? '#fff' : c,
      flexShrink: 0
    }
  }), children, onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    "aria-label": "Remove",
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      padding: 0,
      color: 'inherit',
      display: 'inline-flex',
      opacity: 0.7,
      fontSize: 14,
      lineHeight: 1
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
/**
 * Improov Homes — Toast
 * Inline notification card. Tone sets the accent rail & icon.
 */
function Toast({
  title,
  message,
  tone = 'info',
  onClose,
  style = {}
}) {
  const tones = {
    info: {
      c: 'var(--color-blue)',
      soft: 'var(--blue-50)',
      icon: 'i'
    },
    success: {
      c: 'var(--green-500)',
      soft: 'var(--green-50)',
      icon: '✓'
    },
    warning: {
      c: 'var(--yellow-600)',
      soft: 'var(--yellow-50)',
      icon: '!'
    },
    danger: {
      c: 'var(--brand)',
      soft: 'var(--cherry-50)',
      icon: '!'
    }
  };
  const t = tones[tone] || tones.info;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      padding: 14,
      paddingLeft: 16,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderLeft: `5px solid ${t.c}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-md)',
      maxWidth: 380,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      width: 26,
      height: 26,
      borderRadius: '50%',
      background: t.soft,
      color: t.c,
      fontFamily: 'var(--font-ui)',
      fontWeight: 700,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 15
    }
  }, t.icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 700,
      color: 'var(--text-strong)',
      fontSize: 'var(--text-sm)',
      marginBottom: 2
    }
  }, title), message && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      lineHeight: 1.4
    }
  }, message)), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Dismiss",
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: 'var(--text-subtle)',
      fontSize: 18,
      lineHeight: 1,
      padding: 0
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Improov Homes — Button
 * Confident, rounded, friendly. Cherry is the primary call to action.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  full = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  type = 'button',
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '0 14px',
      height: 36,
      fontSize: 'var(--text-sm)',
      gap: 8,
      radius: 'var(--radius-sm)'
    },
    md: {
      padding: '0 20px',
      height: 44,
      fontSize: 'var(--text-base)',
      gap: 10,
      radius: 'var(--radius-md)'
    },
    lg: {
      padding: '0 28px',
      height: 54,
      fontSize: 'var(--text-md)',
      gap: 12,
      radius: 'var(--radius-lg)'
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: 'var(--brand)',
      color: 'var(--text-on-brand)',
      border: '2px solid transparent',
      boxShadow: 'var(--shadow-brand)'
    },
    secondary: {
      background: 'var(--color-blue)',
      color: 'var(--text-on-brand)',
      border: '2px solid transparent',
      boxShadow: 'var(--shadow-sm)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--brand)',
      border: '2px solid var(--brand)',
      boxShadow: 'none'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-strong)',
      border: '2px solid transparent',
      boxShadow: 'none'
    },
    dark: {
      background: 'var(--neutral-800)',
      color: 'var(--text-on-dark)',
      border: '2px solid transparent',
      boxShadow: 'var(--shadow-sm)'
    }
  };
  const v = variants[variant] || variants.primary;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    height: s.height,
    padding: s.padding,
    width: full ? '100%' : 'auto',
    fontFamily: 'var(--font-ui)',
    fontWeight: 'var(--weight-bold)',
    fontSize: s.fontSize,
    letterSpacing: '0.01em',
    lineHeight: 1,
    borderRadius: s.radius,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'transform var(--duration-fast) var(--ease-standard), filter var(--duration-fast) var(--ease-standard)',
    whiteSpace: 'nowrap',
    ...v,
    ...style
  };
  const hoverIn = e => {
    if (!disabled) e.currentTarget.style.filter = 'brightness(0.93)';
  };
  const hoverOut = e => {
    e.currentTarget.style.filter = 'none';
  };
  const down = e => {
    if (!disabled) e.currentTarget.style.transform = 'scale(0.97)';
  };
  const up = e => {
    e.currentTarget.style.transform = 'scale(1)';
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: base,
    onMouseEnter: hoverIn,
    onMouseLeave: e => {
      hoverOut(e);
      up(e);
    },
    onMouseDown: down,
    onMouseUp: up
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/**
 * Improov Homes — Checkbox
 * Rounded square check, cherry when active.
 */
function Checkbox({
  checked = false,
  onChange,
  label,
  disabled = false,
  id,
  style = {}
}) {
  const fieldId = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    id: fieldId,
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 22,
      height: 22,
      flexShrink: 0,
      borderRadius: 'var(--radius-xs)',
      border: `2px solid ${checked ? 'var(--brand)' : 'var(--border-strong)'}`,
      background: checked ? 'var(--brand)' : 'var(--surface-card)',
      color: '#fff',
      transition: 'all var(--duration-fast) var(--ease-standard)'
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }))), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Improov Homes — IconButton
 * A square/circular button holding a single icon. Pairs with Lucide icons.
 */
function IconButton({
  children,
  label,
  variant = 'ghost',
  size = 'md',
  shape = 'rounded',
  disabled = false,
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: 32,
    md: 40,
    lg: 48
  };
  const dim = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: 'var(--brand)',
      color: 'var(--text-on-brand)',
      border: '2px solid transparent'
    },
    soft: {
      background: 'var(--brand-soft)',
      color: 'var(--brand)',
      border: '2px solid transparent'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-strong)',
      border: '2px solid var(--border-default)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-body)',
      border: '2px solid transparent'
    }
  };
  const v = variants[variant] || variants.ghost;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: dim,
    height: dim,
    borderRadius: shape === 'circle' ? '50%' : 'var(--radius-md)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'background var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)',
    ...v,
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    style: base,
    onMouseEnter: e => {
      if (!disabled && variant === 'ghost') e.currentTarget.style.background = 'var(--neutral-100)';
    },
    onMouseLeave: e => {
      if (variant === 'ghost') e.currentTarget.style.background = 'transparent';
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.92)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Improov Homes — Input
 * Labelled text field with optional leading icon, helper / error text.
 */
function Input({
  label,
  value,
  onChange,
  placeholder = '',
  type = 'text',
  helper = '',
  error = '',
  iconLeft = null,
  prefix = null,
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const fieldId = id || React.useId();
  const invalid = !!error;
  const borderColor = invalid ? 'var(--danger)' : focused ? 'var(--ring-focus)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      height: 46,
      padding: '0 14px',
      background: disabled ? 'var(--neutral-100)' : 'var(--surface-card)',
      border: `2px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focused && !invalid ? 'var(--shadow-focus)' : 'none',
      transition: 'border-color var(--duration-fast), box-shadow var(--duration-fast)'
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      display: 'inline-flex'
    }
  }, iconLeft), prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontFamily: 'var(--font-ui)',
      fontWeight: 700
    }
  }, prefix), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-strong)',
      minWidth: 0
    }
  }, rest))), (helper || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: invalid ? 'var(--danger)' : 'var(--text-muted)'
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
/**
 * Improov Homes — Radio
 * Single-select dot. Use a shared `name` to group.
 */
function Radio({
  checked = false,
  onChange,
  label,
  name,
  value,
  disabled = false,
  id,
  style = {}
}) {
  const fieldId = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    id: fieldId,
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 22,
      height: 22,
      flexShrink: 0,
      borderRadius: '50%',
      border: `2px solid ${checked ? 'var(--brand)' : 'var(--border-strong)'}`,
      background: 'var(--surface-card)',
      transition: 'all var(--duration-fast) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 11,
      height: 11,
      borderRadius: '50%',
      background: 'var(--brand)',
      transform: checked ? 'scale(1)' : 'scale(0)',
      transition: 'transform var(--duration-fast) var(--ease-emphasis)'
    }
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Improov Homes — Select
 * Native dropdown styled to match Input.
 */
function Select({
  label,
  value,
  onChange,
  options = [],
  placeholder = 'Select…',
  helper = '',
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const fieldId = id || React.useId();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fieldId,
    value: value,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      height: 46,
      padding: '0 40px 0 14px',
      background: disabled ? 'var(--neutral-100)' : 'var(--surface-card)',
      border: `2px solid ${focused ? 'var(--ring-focus)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focused ? 'var(--shadow-focus)' : 'none',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: value ? 'var(--text-strong)' : 'var(--text-subtle)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'border-color var(--duration-fast), box-shadow var(--duration-fast)'
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const lab = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lab);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 14,
      pointerEvents: 'none',
      color: 'var(--text-muted)',
      fontSize: 12
    }
  }, "\u25BE")), helper && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, helper));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
/**
 * Improov Homes — Switch
 * Pill toggle, green when on (positive action).
 */
function Switch({
  checked = false,
  onChange,
  label,
  disabled = false,
  id,
  style = {}
}) {
  const fieldId = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    id: fieldId,
    type: "checkbox",
    role: "switch",
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 46,
      height: 26,
      flexShrink: 0,
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--green-500)' : 'var(--neutral-300)',
      transition: 'background var(--duration-normal) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: 3,
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-sm)',
      transform: checked ? 'translateX(20px)' : 'translateX(0)',
      transition: 'transform var(--duration-normal) var(--ease-emphasis)'
    }
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/**
 * Improov Homes — Tabs
 * Underline tabs with a sliding cherry indicator.
 */
function Tabs({
  tabs = [],
  value,
  onChange,
  style = {}
}) {
  const [internal, setInternal] = React.useState(tabs[0]?.value ?? tabs[0]);
  const active = value !== undefined ? value : internal;
  const select = v => {
    if (value === undefined) setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      borderBottom: '2px solid var(--border-subtle)',
      ...style
    }
  }, tabs.map(t => {
    const val = typeof t === 'string' ? t : t.value;
    const lab = typeof t === 'string' ? t : t.label;
    const count = typeof t === 'object' ? t.count : undefined;
    const isActive = val === active;
    return /*#__PURE__*/React.createElement("button", {
      key: val,
      onClick: () => select(val),
      style: {
        position: 'relative',
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        padding: '12px 16px',
        marginBottom: -2,
        fontFamily: 'var(--font-ui)',
        fontWeight: 700,
        fontSize: 'var(--text-base)',
        color: isActive ? 'var(--brand)' : 'var(--text-muted)',
        borderBottom: `3px solid ${isActive ? 'var(--brand)' : 'transparent'}`,
        transition: 'color var(--duration-fast), border-color var(--duration-fast)',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8
      }
    }, lab, count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-xs)',
        padding: '1px 7px',
        borderRadius: 'var(--radius-pill)',
        background: isActive ? 'var(--cherry-50)' : 'var(--neutral-100)',
        color: isActive ? 'var(--brand)' : 'var(--text-muted)'
      }
    }, count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/improov-app/icons.jsx
try { (() => {
/* Improov Homes — icon set (Lucide path data, MIT licensed)
   Exposes a single <Icon name size stroke/> React component on window. */
const IH_ICON_PATHS = {
  home: '<path d="M3 9.5 12 3l9 6.5V21H3z"/><path d="M9 21v-6h6v6"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
  heart: '<path d="M19 14c1.5-1.5 3-3.4 3-5.5A4.5 4.5 0 0 0 12 5 4.5 4.5 0 0 0 2 8.5C2 12 5 14 12 21c7-7 7-5 7-7z"/>',
  bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/>',
  wallet: '<path d="M19 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2"/><path d="M21 10h-5a2 2 0 0 0 0 4h5z"/>',
  trending: '<path d="M22 7 13.5 15.5 8.5 10.5 2 17"/><path d="M16 7h6v6"/>',
  chevronRight: '<path d="m9 18 6-6-6-6"/>',
  chevronLeft: '<path d="m15 18-6-6 6-6"/>',
  arrowLeft: '<path d="M19 12H5"/><path d="m12 19-7-7 7-7"/>',
  arrowRight: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  check: '<polyline points="20 6 9 17 4 12"/>',
  checkCircle: '<circle cx="12" cy="12" r="10"/><polyline points="16 9 11 14 8 11"/>',
  mapPin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
  calculator: '<rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="10" x2="8" y2="10"/><line x1="12" y1="10" x2="12" y2="10"/><line x1="16" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="8" y2="14"/><line x1="12" y1="14" x2="12" y2="14"/><line x1="8" y1="18" x2="16" y2="18"/>',
  file: '<path d="M14 3v5h5"/><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-2.7 1.1V21a2 2 0 0 1-4 0v-.1A1.6 1.6 0 0 0 7 19.4a1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0-1.1-2.7H1a2 2 0 0 1 0-4h.1A1.6 1.6 0 0 0 2.6 7a1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1A1.6 1.6 0 0 0 7 2.6h.1A1.6 1.6 0 0 0 8 1.1V1a2 2 0 0 1 4 0v.1A1.6 1.6 0 0 0 14.6 2.6a1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8V7a1.6 1.6 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1z"/>',
  plus: '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
  lock: '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/>',
  eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>',
  bed: '<path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/>',
  bath: '<path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.7 3 4 3.7 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5H4"/><line x1="4" y1="12" x2="20" y2="12"/>',
  ruler: '<path d="M21.3 8.7 8.7 21.3a1 1 0 0 1-1.4 0l-4.6-4.6a1 1 0 0 1 0-1.4L15.3 2.7a1 1 0 0 1 1.4 0l4.6 4.6a1 1 0 0 1 0 1.4z"/><path d="m7.5 10.5 2 2M10.5 7.5l2 2M13.5 4.5l2 2"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  star: '<polygon points="12 2 15 9 22 9.3 16.5 14 18.5 21 12 17 5.5 21 7.5 14 2 9.3 9 9"/>',
  clock: '<circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 14"/>'
};
function Icon({
  name,
  size = 22,
  stroke = 2,
  color = 'currentColor',
  style = {}
}) {
  const d = IH_ICON_PATHS[name] || '';
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: style,
    dangerouslySetInnerHTML: {
      __html: d
    }
  });
}
window.Icon = Icon;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/improov-app/icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/improov-app/screens.jsx
try { (() => {
/* Improov Homes — App UI Kit screens.
   Composes the design-system primitives (window.ImproovHomesDesignSystem_738607)
   plus the local Icon set. Exposes window.ImproovApp. */
(function () {
  const DS = window.ImproovHomesDesignSystem_738607;
  const {
    Button,
    Input,
    Badge,
    Tag,
    ProgressBar,
    Card,
    StatCard,
    Avatar,
    Tabs,
    Switch
  } = DS;
  const Icon = window.Icon;
  const ROOT = '../..'; // path to project root for assets

  // ---- Branded photo placeholder (no stock imagery shipped) ----
  function Photo({
    h = 150,
    seed = 0,
    radius = 0,
    label
  }) {
    const combos = [['var(--color-blue)', 'var(--color-yellow)', 'var(--color-cherry)'], ['var(--color-green)', 'var(--color-cherry)', 'var(--color-yellow)'], ['var(--color-purple)', 'var(--color-blue)', 'var(--color-green)'], ['var(--color-yellow)', 'var(--color-orange)', 'var(--color-cherry)']];
    const c = combos[seed % combos.length];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        height: h,
        borderRadius: radius,
        overflow: 'hidden',
        background: c[0]
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        opacity: 0.92
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        right: -30,
        top: -30,
        width: 130,
        height: 130,
        borderRadius: '50%',
        background: c[1]
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: -20,
        bottom: -40,
        width: 120,
        height: 120,
        borderRadius: '999px 999px 0 0',
        background: c[2]
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        right: 40,
        bottom: -25,
        width: 70,
        height: 70,
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.35)'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'rgba(255,255,255,0.95)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "home",
      size: 40,
      stroke: 2.2
    })), label && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 10,
        bottom: 10
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "cherry",
      solid: true
    }, label)));
  }
  const money = n => '$' + n.toLocaleString();
  const LISTINGS = [{
    id: 1,
    title: 'Maple Ridge Bungalow',
    city: 'Austin, TX',
    price: 312000,
    beds: 3,
    baths: 2,
    sqft: 1480,
    tag: 'New'
  }, {
    id: 2,
    title: 'Cedar Park Townhome',
    city: 'Cedar Park, TX',
    price: 289500,
    beds: 2,
    baths: 2,
    sqft: 1210,
    tag: null
  }, {
    id: 3,
    title: 'Oakwood Family Home',
    city: 'Round Rock, TX',
    price: 415000,
    beds: 4,
    baths: 3,
    sqft: 2240,
    tag: 'Hot'
  }];

  // ===================== WELCOME / LOGIN =====================
  function Welcome({
    onContinue
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--bg-page)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--neutral-800)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: 28
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        opacity: 0.95
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: -40,
        right: -30,
        width: 160,
        height: 160,
        borderRadius: '50%',
        background: 'var(--color-cherry)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 80,
        left: -50,
        width: 150,
        height: 150,
        borderRadius: '999px 999px 0 0',
        background: 'var(--color-blue)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 30,
        left: 90,
        width: 70,
        height: 70,
        borderRadius: '50%',
        background: 'var(--color-yellow)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 150,
        right: 60,
        width: 60,
        height: 60,
        borderRadius: '50%',
        background: 'var(--color-green)'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: `${ROOT}/assets/logos/favicon-cherry.png`,
      alt: "",
      style: {
        width: 64,
        height: 64,
        marginBottom: 20,
        filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))'
      }
    }), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        fontSize: 38,
        lineHeight: 1.02,
        letterSpacing: '-0.02em',
        color: '#fff',
        margin: 0
      }
    }, "Own the home of your dreams."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        color: 'rgba(255,255,255,0.85)',
        fontSize: 16,
        marginTop: 12,
        marginBottom: 0
      }
    }, "Save smarter, get pre-approved, and find the one \u2014 all in one place."))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 24,
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      full: true,
      onClick: onContinue
    }, "Create your account"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "md",
      full: true,
      onClick: onContinue
    }, "I already have an account")));
  }

  // ===================== DASHBOARD =====================
  function Dashboard({
    onOpenBrowse
  }) {
    return /*#__PURE__*/React.createElement(Screen, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 11
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: "Jordan Lee",
      size: 42
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--text-muted)',
        fontFamily: 'var(--font-body)'
      }
    }, "Good morning,"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-ui)',
        fontWeight: 700,
        color: 'var(--text-strong)',
        fontSize: 17
      }
    }, "Jordan Lee"))), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 42,
        height: 42,
        borderRadius: 'var(--radius-md)',
        background: 'var(--neutral-100)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--text-body)',
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "bell",
      size: 20
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: 9,
        right: 10,
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: 'var(--brand)',
        border: '2px solid #fff'
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 'var(--radius-xl)',
        background: 'var(--brand)',
        color: '#fff',
        padding: 22,
        marginBottom: 18,
        boxShadow: 'var(--shadow-brand)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        right: -30,
        top: -30,
        width: 130,
        height: 130,
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.12)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-ui)',
        fontWeight: 700,
        fontSize: 12,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        opacity: 0.85
      }
    }, "Down-payment fund"), /*#__PURE__*/React.createElement(Icon, {
      name: "wallet",
      size: 22,
      color: "rgba(255,255,255,0.9)"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-ui)',
        fontWeight: 700,
        fontSize: 40,
        lineHeight: 1.1,
        marginTop: 6
      }
    }, "$24,500"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: 13,
        marginBottom: 6,
        opacity: 0.9
      }
    }, /*#__PURE__*/React.createElement("span", null, "Goal \xB7 $36,000"), /*#__PURE__*/React.createElement("span", null, "68%")), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 8,
        borderRadius: 999,
        background: 'rgba(255,255,255,0.25)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: '68%',
        height: '100%',
        background: '#fff',
        borderRadius: 999
      }
    }))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 12,
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement(StatCard, {
      label: "Est. payment",
      value: "$1,840",
      delta: "\u22123% this wk",
      deltaDir: "down",
      color: "green",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "home",
        size: 18
      })
    }), /*#__PURE__*/React.createElement(StatCard, {
      label: "Credit score",
      value: "724",
      delta: "+12 pts",
      deltaDir: "up",
      color: "blue",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "trending",
        size: 18
      })
    })), /*#__PURE__*/React.createElement(Card, {
      style: {
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 44,
        height: 44,
        borderRadius: 'var(--radius-md)',
        background: 'var(--green-50)',
        color: 'var(--green-600)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "checkCircle",
      size: 24
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-ui)',
        fontWeight: 700,
        color: 'var(--text-strong)'
      }
    }, "You're pre-approved"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--text-muted)'
      }
    }, "Up to ", money(385000), " \xB7 valid 60 days")), /*#__PURE__*/React.createElement(Icon, {
      name: "chevronRight",
      size: 20,
      color: "var(--text-subtle)"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 20,
        margin: 0,
        color: 'var(--text-strong)'
      }
    }, "Picked for you"), /*#__PURE__*/React.createElement("button", {
      onClick: onOpenBrowse,
      style: {
        border: 'none',
        background: 'none',
        color: 'var(--brand)',
        fontFamily: 'var(--font-ui)',
        fontWeight: 700,
        fontSize: 14,
        cursor: 'pointer'
      }
    }, "See all")), /*#__PURE__*/React.createElement(ListingRow, {
      l: LISTINGS[0],
      seed: 0
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 12
      }
    }), /*#__PURE__*/React.createElement(ListingRow, {
      l: LISTINGS[2],
      seed: 2
    }));
  }
  function ListingRow({
    l,
    seed
  }) {
    return /*#__PURE__*/React.createElement(Card, {
      padding: 0,
      interactive: true
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 104,
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(Photo, {
      h: 104,
      seed: seed,
      label: l.tag
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '12px 12px 12px 0',
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-ui)',
        fontWeight: 700,
        fontSize: 18,
        color: 'var(--text-strong)'
      }
    }, money(l.price)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-ui)',
        fontWeight: 700,
        color: 'var(--text-body)',
        fontSize: 14,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, l.title), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        color: 'var(--text-muted)',
        fontSize: 13,
        marginTop: 2
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "mapPin",
      size: 13
    }), " ", l.city), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        marginTop: 8,
        color: 'var(--text-muted)',
        fontSize: 13,
        fontFamily: 'var(--font-ui)',
        fontWeight: 700
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "bed",
      size: 15
    }), l.beds), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "bath",
      size: 15
    }), l.baths), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "ruler",
      size: 15
    }), l.sqft)))));
  }

  // ===================== BROWSE =====================
  function Browse({
    onOpen
  }) {
    const [filter, setFilter] = React.useState({
      beds: true,
      garage: false,
      budget: true
    });
    return /*#__PURE__*/React.createElement(Screen, null, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        fontSize: 28,
        margin: '0 0 14px',
        color: 'var(--text-strong)'
      }
    }, "Browse homes"), /*#__PURE__*/React.createElement(Input, {
      placeholder: "City, ZIP or address",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "search",
        size: 18
      }),
      style: {
        marginBottom: 14
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        marginBottom: 18,
        overflowX: 'auto',
        paddingBottom: 4
      }
    }, /*#__PURE__*/React.createElement(Tag, {
      color: "blue",
      selected: filter.beds,
      onClick: () => setFilter({
        ...filter,
        beds: !filter.beds
      })
    }, "3+ beds"), /*#__PURE__*/React.createElement(Tag, {
      color: "green",
      selected: filter.garage,
      onClick: () => setFilter({
        ...filter,
        garage: !filter.garage
      })
    }, "Garage"), /*#__PURE__*/React.createElement(Tag, {
      color: "cherry",
      selected: filter.budget,
      onClick: () => setFilter({
        ...filter,
        budget: !filter.budget
      })
    }, "Under $400k")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, LISTINGS.map((l, i) => /*#__PURE__*/React.createElement(Card, {
      key: l.id,
      padding: 0,
      interactive: true,
      style: {
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("div", {
      onClick: () => onOpen(l)
    }, /*#__PURE__*/React.createElement(Photo, {
      h: 150,
      seed: i,
      label: l.tag
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-ui)',
        fontWeight: 700,
        fontSize: 22,
        color: 'var(--text-strong)'
      }
    }, money(l.price)), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 3,
        color: 'var(--text-muted)',
        fontSize: 13
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "heart",
      size: 16
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-ui)',
        fontWeight: 700,
        color: 'var(--text-body)',
        marginTop: 2
      }
    }, l.title), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        color: 'var(--text-muted)',
        fontSize: 13,
        marginTop: 2
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "mapPin",
      size: 13
    }), " ", l.city), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 16,
        marginTop: 10,
        color: 'var(--text-muted)',
        fontSize: 14,
        fontFamily: 'var(--font-ui)',
        fontWeight: 700
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "bed",
      size: 16
    }), l.beds, " bd"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "bath",
      size: 16
    }), l.baths, " ba"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "ruler",
      size: 16
    }), l.sqft, " ft\xB2"))))))));
  }

  // ===================== DETAIL =====================
  function Detail({
    l,
    onBack
  }) {
    const lst = l || LISTINGS[0];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        height: '100%',
        overflowY: 'auto',
        background: 'var(--bg-page)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement(Photo, {
      h: 230,
      seed: lst.id
    }), /*#__PURE__*/React.createElement("button", {
      onClick: onBack,
      style: {
        position: 'absolute',
        top: 16,
        left: 16,
        width: 40,
        height: 40,
        borderRadius: '50%',
        border: 'none',
        background: 'rgba(255,255,255,0.95)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        boxShadow: 'var(--shadow-sm)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrowLeft",
      size: 20,
      color: "var(--text-strong)"
    })), /*#__PURE__*/React.createElement("button", {
      style: {
        position: 'absolute',
        top: 16,
        right: 16,
        width: 40,
        height: 40,
        borderRadius: '50%',
        border: 'none',
        background: 'rgba(255,255,255,0.95)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        boxShadow: 'var(--shadow-sm)',
        color: 'var(--brand)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "heart",
      size: 20
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 22
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-ui)',
        fontWeight: 700,
        fontSize: 30,
        color: 'var(--text-strong)'
      }
    }, money(lst.price)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-ui)',
        fontWeight: 700,
        fontSize: 17,
        color: 'var(--text-body)'
      }
    }, lst.title), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        color: 'var(--text-muted)',
        marginTop: 3
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "mapPin",
      size: 15
    }), " ", lst.city)), lst.tag && /*#__PURE__*/React.createElement(Badge, {
      tone: "cherry",
      solid: true
    }, lst.tag)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        marginTop: 18
      }
    }, [['bed', `${lst.beds} Beds`], ['bath', `${lst.baths} Baths`], ['ruler', `${lst.sqft} ft²`]].map(([ic, t]) => /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        flex: 1,
        background: 'var(--bg-subtle)',
        borderRadius: 'var(--radius-md)',
        padding: '12px 8px',
        textAlign: 'center',
        color: 'var(--text-body)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        color: 'var(--brand)',
        marginBottom: 4
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 20
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-ui)',
        fontWeight: 700,
        fontSize: 13
      }
    }, t)))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 22
      }
    }, /*#__PURE__*/React.createElement(ProgressBar, {
      label: "Fits your budget",
      value: 88,
      showValue: true,
      color: "green"
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        color: 'var(--text-muted)',
        fontSize: 14,
        lineHeight: 1.6,
        marginTop: 14
      }
    }, "Estimated monthly payment of ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: 'var(--text-strong)'
      }
    }, "$1,640"), " with your pre-approved rate \u2014 comfortably within your target.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        marginTop: 18
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      full: true
    }, "Schedule tour"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      full: true
    }, "Make an offer"))));
  }
  function Screen({
    children
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        height: '100%',
        overflowY: 'auto',
        padding: 22,
        background: 'var(--bg-page)'
      }
    }, children);
  }

  // ===================== APP SHELL =====================
  function App() {
    const [stage, setStage] = React.useState('welcome'); // welcome | app
    const [tab, setTab] = React.useState('home');
    const [detail, setDetail] = React.useState(null);
    let body;
    if (stage === 'welcome') {
      body = /*#__PURE__*/React.createElement(Welcome, {
        onContinue: () => setStage('app')
      });
    } else if (detail) {
      body = /*#__PURE__*/React.createElement(Detail, {
        l: detail,
        onBack: () => setDetail(null)
      });
    } else if (tab === 'home') {
      body = /*#__PURE__*/React.createElement(Dashboard, {
        onOpenBrowse: () => setTab('browse')
      });
    } else if (tab === 'browse') {
      body = /*#__PURE__*/React.createElement(Browse, {
        onOpen: l => setDetail(l)
      });
    } else if (tab === 'saved') {
      body = /*#__PURE__*/React.createElement(Saved, {
        onOpen: l => setDetail(l)
      });
    } else {
      body = /*#__PURE__*/React.createElement(Profile, null);
    }
    const showNav = stage === 'app' && !detail;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minHeight: 0
      }
    }, body), showNav && /*#__PURE__*/React.createElement(BottomNav, {
      tab: tab,
      setTab: setTab
    }));
  }
  function Saved({
    onOpen
  }) {
    return /*#__PURE__*/React.createElement(Screen, null, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        fontSize: 28,
        margin: '0 0 14px',
        color: 'var(--text-strong)'
      }
    }, "Saved homes"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(ListingRow, {
      l: LISTINGS[1],
      seed: 1
    }), /*#__PURE__*/React.createElement(ListingRow, {
      l: LISTINGS[2],
      seed: 2
    })));
  }
  function Profile() {
    const rows = [['shield', 'Pre-approval', 'Up to $385,000'], ['file', 'Documents', '3 uploaded'], ['calculator', 'Affordability tools', null], ['settings', 'Settings', null]];
    return /*#__PURE__*/React.createElement(Screen, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 10,
        padding: '12px 0 22px'
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: "Jordan Lee",
      size: 76
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 22,
        color: 'var(--text-strong)'
      }
    }, "Jordan Lee"), /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'var(--text-muted)',
        fontSize: 14
      }
    }, "jordan.lee@email.com")), /*#__PURE__*/React.createElement(Badge, {
      tone: "green"
    }, "Pre-approved buyer")), /*#__PURE__*/React.createElement(Card, {
      padding: 0
    }, rows.map(([ic, label, sub], i) => /*#__PURE__*/React.createElement("div", {
      key: label,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        padding: '15px 16px',
        borderBottom: i < rows.length - 1 ? '1px solid var(--border-subtle)' : 'none',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 38,
        height: 38,
        borderRadius: 'var(--radius-md)',
        background: 'var(--cherry-50)',
        color: 'var(--brand)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 19
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-ui)',
        fontWeight: 700,
        color: 'var(--text-strong)'
      }
    }, label), sub && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--text-muted)'
      }
    }, sub)), /*#__PURE__*/React.createElement(Icon, {
      name: "chevronRight",
      size: 18,
      color: "var(--text-subtle)"
    })))));
  }
  function BottomNav({
    tab,
    setTab
  }) {
    const items = [['home', 'Home'], ['browse', 'Browse'], ['saved', 'Saved'], ['profile', 'Profile']];
    const iconFor = {
      home: 'home',
      browse: 'search',
      saved: 'heart',
      profile: 'user'
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        borderTop: '1px solid var(--border-subtle)',
        background: 'rgba(255,255,255,0.96)',
        backdropFilter: 'blur(8px)',
        padding: '8px 6px 10px'
      }
    }, items.map(([key, label]) => {
      const active = tab === key;
      return /*#__PURE__*/React.createElement("button", {
        key: key,
        onClick: () => setTab(key),
        style: {
          flex: 1,
          border: 'none',
          background: 'none',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4,
          padding: '4px 0',
          color: active ? 'var(--brand)' : 'var(--text-subtle)'
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: iconFor[key],
        size: 22,
        stroke: active ? 2.4 : 2
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'var(--font-ui)',
          fontWeight: 700,
          fontSize: 11
        }
      }, label));
    }));
  }
  window.ImproovApp = {
    App,
    Welcome,
    Dashboard,
    Browse,
    Detail,
    Profile
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/improov-app/screens.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
