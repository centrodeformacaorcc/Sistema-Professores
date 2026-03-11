const { useState, useEffect, useMemo, useCallback, useRef } = React;
        const { createRoot } = ReactDOM;

        const kebabToPascal = (str) =>
            str.replace(/-([a-z0-9])/g, (g) => g[1].toUpperCase())
                .replace(/^[a-z]/, (g) => g.toUpperCase());

        const Icon = ({ name, size = 24, className = "", ...props }) => {
            const ref = useRef(null);

            useEffect(() => {
                if (!ref.current || !window.lucide) return;
                const pascalName = kebabToPascal(name);
                const iconDef = window.lucide.icons ? window.lucide.icons[pascalName] : null;
                if (iconDef) {
                    const svg = window.lucide.createElement(iconDef);
                    svg.setAttribute('width', size);
                    svg.setAttribute('height', size);
                    ref.current.innerHTML = '';
                    ref.current.appendChild(svg);
                }
            }, [name, size]);

            return <span ref={ref} className={className} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, verticalAlign: 'middle', lineHeight: 0 }} {...props}></span>;
        };

        const CustomCourseIcon = ({ size = 24, className = "" }) => (
            <img src="https://i.imgur.com/N03iLnL.png" alt="Aulas e Scripts" style={{ width: size, height: size, objectFit: 'contain' }} className={className} />
        );

        const CustomProfessorIcon = ({ size = 24, className = "" }) => (
            <img src="https://i.imgur.com/85pC8ek.png" alt="Manual do Professor" style={{ width: size, height: size, objectFit: 'contain' }} className={className} />
        );

        const CustomHomeIcon = ({ size = 24, className = "" }) => (
            <img src="https://i.imgur.com/3zN40MT.png" alt="Início" style={{ width: size, height: size, objectFit: 'contain' }} className={className} />
        );

        const CustomHistoryIcon = ({ size = 24, className = "" }) => (
            <img src="https://i.imgur.com/crHNfQF.png" alt="Histórico" style={{ width: size, height: size, objectFit: 'contain' }} className={className} />
        );

        const CustomHTrophyIcon = ({ size = 24, className = "" }) => (
            <img src="https://i.imgur.com/poHdvN7.png" alt="Troféu" style={{ width: size, height: size, objectFit: 'contain' }} className={className} />
        );

        // Icon definitions
        const Menu = (p) => <Icon name="menu" {...p} />;
        const Moon = (p) => <Icon name="moon" {...p} />;
        const Sun = (p) => <Icon name="sun" {...p} />;
        const ChevronDown = (p) => <Icon name="chevron-down" {...p} />;
        const ChevronUp = (p) => <Icon name="chevron-up" {...p} />;
        const CheckCircle = (p) => <Icon name="check-circle" {...p} />;
        const Copy = (p) => <Icon name="copy" {...p} />;
        const Check = (p) => <Icon name="check" {...p} />;
        const ChevronRight = (p) => <Icon name="chevron-right" {...p} />;
        const ChevronLeft = (p) => <Icon name="chevron-left" {...p} />;
        const X = (p) => <Icon name="x" {...p} />;
        const Users = (p) => <Icon name="users" {...p} />;
        const Lock = (p) => <Icon name="lock" {...p} />;
        const Loader2 = (p) => <Icon name="loader-2" {...p} />;
        const Info = (p) => <Icon name="info" {...p} />;
        const AlertTriangle = (p) => <Icon name="alert-triangle" {...p} />;
        const CheckCircle2 = (p) => <Icon name="check-circle-2" {...p} />;
        const XCircle = (p) => <Icon name="x-circle" {...p} />;
        const Search = (p) => <Icon name="search" {...p} />;
        const Filter = (p) => <Icon name="filter" {...p} />;
        const ArrowUpDown = (p) => <Icon name="arrow-up-down" {...p} />;
        const CalendarDays = (p) => <Icon name="calendar-days" {...p} />;
        const Clock = (p) => <Icon name="clock" {...p} />;
        const FileCheck = (p) => <Icon name="file-check" {...p} />;
        const AlertCircle = (p) => <Icon name="alert-circle" {...p} />;
        const Terminal = (p) => <Icon name="terminal" {...p} />;
        const ClipboardList = (p) => <Icon name="clipboard-list" {...p} />;
        const Eraser = (p) => <Icon name="eraser" {...p} />;
        const Scan = (p) => <Icon name="scan" {...p} />;
        const XSquare = (p) => <Icon name="x-square" {...p} />;
        const Globe = (p) => <Icon name="globe" {...p} />;
        const FileText = (p) => <Icon name="file-text" {...p} />;
        const SendHorizontal = (p) => <Icon name="send-horizontal" {...p} />;
        const Code = (p) => <Icon name="code" {...p} />;
        const Book = (p) => <Icon name="book" {...p} />;
        const ArrowLeft = (p) => <Icon name="arrow-left" {...p} />;
        const FileSignature = (p) => <Icon name="file-signature" {...p} />;
        const ArrowRight = (p) => <Icon name="arrow-right" {...p} />;
        const LayoutDashboard = (p) => <Icon name="layout-dashboard" {...p} />;
        const Plus = (p) => <Icon name="plus" {...p} />;
        const Minus = (p) => <Icon name="minus" {...p} />;
        const Type = (p) => <Icon name="type" {...p} />;
        const Sheet = (p) => <Icon name="sheet" {...p} />;
        const ShieldAlert = (p) => <Icon name="shield-alert" {...p} />;
        const Fingerprint = (p) => <Icon name="fingerprint" {...p} />;
        const ShieldCheck = (p) => <Icon name="shield-check" {...p} />;
        const ExternalLink = (p) => <Icon name="external-link" {...p} />;
        const Trophy = (p) => <Icon name="trophy" {...p} />;
        const User = (p) => <Icon name="user" {...p} />;
        const LogOut = (p) => <Icon name="log-out" {...p} />;

        // --- CONSTANTS ---
        const WORKER_URL = "https://api-professor-dashboard.brendonhbrcc.workers.dev/";

        const AUTH_GID = "1512246214";
        const HISTORY_GID = "552818815";
        const RANKING_GID = "726989113";
        const MANUAL_PROF_GID = "2125629446";
        const SLIDESHOW_GID = "661060277";
        const NOTICES_GID = "1523373356";
        const INIT_PROC_GID = "182309842";
        const LOGO_URL = "https://i.imgur.com/7Q1KoaM.png";

        const CLASSES = [
            { id: 'admin', name: 'Administração e Tecnologia do Fórum', gid: '0', description: 'Script da matéria Administração e Tecnologia do Fórum', icon: 'https://i.imgur.com/x8lj35t.png', postUrl: 'https://www.policiarcc.com/h36-?aula=admin' },
            { id: 'mil_sci', name: 'Ciências Militares', gid: '971998757', description: 'Script da matéria Ciências Militares', icon: 'https://i.imgur.com/oO2aF2k.png', postUrl: 'https://www.policiarcc.com/h36-?aula=mil_sci' },
            { id: 'mil_career', name: 'Carreira Militar', gid: '303472444', description: 'Script da matéria Carreira Militar', icon: 'https://i.imgur.com/Na76QYn.png', postUrl: 'https://www.policiarcc.com/h36-?aula=mil_career' },
            { id: 'practice', name: 'Práticas Militares e Legislação', gid: '1700831677', description: 'Script da matéria Práticas Militares e Legislação', icon: 'https://i.imgur.com/lR1RzIE.png', postUrl: 'https://www.policiarcc.com/h36-?aula=practice' },
        ];

        // --- TOAST NOTIFICATIONS ---
        const ToastContainer = ({ toasts, removeToast }) => {
            return (
                <div className="fixed top-24 right-4 z-[9999] flex flex-col gap-3 max-w-sm w-full pointer-events-none">
                    {toasts.map(toast => (
                        <div key={toast.id} className={`pointer-events-auto bg-white dark:bg-[#1a231d] text-slate-800 dark:text-white px-5 py-4 rounded-sm shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.5)] flex items-start gap-4 border-l-4 animate-slide-in ${toast.type === 'success' ? 'border-green-500' : toast.type === 'error' ? 'border-red-500' : 'border-blue-500'}`}>
                            <div className={`mt-0.5 shrink-0 ${toast.type === 'success' ? 'text-green-500' : toast.type === 'error' ? 'text-red-500' : 'text-blue-500'}`}>
                                {toast.type === 'success' ? <CheckCircle2 size={20} /> : toast.type === 'error' ? <AlertTriangle size={20} /> : <Info size={20} />}
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className={`text-xs font-bold uppercase tracking-widest mb-1 ${toast.type === 'success' ? 'text-green-600 dark:text-green-400' : toast.type === 'error' ? 'text-red-600 dark:text-red-400' : 'text-blue-600 dark:text-blue-400'}`}>{toast.title}</h4>
                                <p className="text-xs font-medium leading-relaxed opacity-90 break-words">{toast.message}</p>
                            </div>
                            <button onClick={() => removeToast(toast.id)} className="shrink-0 text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors">
                                <X size={16} />
                            </button>
                        </div>
                    ))}
                </div>
            );
        };

        // --- SERVICES ---
        const parseCSVLine = (text) => {
            const result = [];
            let start = 0;
            let inQuotes = false;
            const delimiter = '\t';
            for (let i = 0; i < text.length; i++) {
                if (text[i] === '"') inQuotes = !inQuotes;
                else if (text[i] === delimiter && !inQuotes) {
                    let field = text.substring(start, i);
                    if (field.startsWith('"') && field.endsWith('"')) field = field.substring(1, field.length - 1).replace(/""/g, '"');
                    result.push(field.trim());
                    start = i + 1;
                }
            }
            let lastField = text.substring(start);
            if (lastField.startsWith('"') && lastField.endsWith('"')) lastField = lastField.substring(1, lastField.length - 1).replace(/""/g, '"');
            result.push(lastField.trim());
            return result;
        };

        const fetchCSV = async (gid) => {
            if (!gid) throw new Error('GID ausente para requisição.');
            const url = `${WORKER_URL}?gid=${gid}&format=tsv`;
            try {
                const response = await fetch(url, { method: 'GET', cache: 'no-store' });
                if (!response.ok) throw new Error(`Falha HTTP ${response.status}`);
                const text = await response.text();
                if (!text || text.trim() === '') return [];
                return text.split(/\r?\n/).map(parseCSVLine);
            } catch (error) {
                console.error("Fetch Error Detail:", error);
                throw new Error('Erro ao buscar dados do Worker');
            }
        };

        const fetchHabboProfile = async (nick) => {
            const encodedNick = encodeURIComponent(nick);
            try {
                const res = await fetch(`https://www.habbo.com.br/api/public/users?name=${encodedNick}`);
                if (res.ok) return await res.json();
                throw new Error("Usuário não encontrado ou API indisponível");
            } catch(e) {
                // Fallback proxy just in case of CORS issues
                try {
                    const proxyRes = await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(`https://www.habbo.com.br/api/public/users?name=${encodedNick}`)}`);
                    if (proxyRes.ok) return await proxyRes.json();
                } catch(proxyError) {
                    console.error("Proxy fetch failed too:", proxyError);
                }
                return null;
            }
        };

        const fetchClassContent = async (gid) => {
            try {
                const rows = await fetchCSV(gid);
                return rows.map(row => ({
                    tag: row[0]?.toLowerCase().trim() || '',
                    content: row[1] || '',
                    extra: row[2] || ''
                })).filter(r => r.tag !== '');
            } catch (error) {
                console.error("Content Fetch Error:", error);
                throw error;
            }
        };

        const fetchClassHistory = async () => {
            try {
                const rows = await fetchCSV(HISTORY_GID);
                if (!rows || rows.length < 2) return [];
                return rows.slice(1).map(row => ({
                    startDateTime: row[0] || '', // Coluna A (Data e Hora de Início)
                    endTimeOnly: row[1] || '',   // Coluna B (Hora de Fim)
                    className: row[2] || '',     // Coluna C
                    type: row[3] || '',          // Coluna D (Aula/Atividade)
                    professor: row[4] || '',     // Coluna E
                    students: row[5] || '',      // Coluna F
                    verdict: row[8] || ''        // Coluna I
                })).filter(entry => entry.className !== '');
            } catch (error) {
                console.error("History Fetch Error:", error);
                return [];
            }
        };

        const fetchRanking = async () => {
            try {
                const rows = await fetchCSV(RANKING_GID);
                if (!rows || rows.length < 1) return { headers: [], data: [] };
                const headers = rows[0].slice(0, 7);
                const data = rows.slice(1).map(row => row.slice(0, 7));
                return { headers, data };
            } catch (error) {
                console.error("Ranking Fetch Error:", error);
                return { headers: [], data: [] };
            }
        };

        const sendPrivateMessage = async (username, subject, message) => {
            try {
                const composeResp = await fetch('/privmsg?mode=post', {
                    credentials: 'same-origin',
                    headers: { 'Cache-Control': 'no-store, no-cache' }
                });
                if (!composeResp.ok) return false;

                const html = await composeResp.text();
                const dom = new DOMParser().parseFromString(html, 'text/html');

                const form = dom.querySelector('form[action*="/privmsg"]');
                if (!form) return false;

                const formData = new FormData();
                let hasUsernameArrayField = false;

                form.querySelectorAll('input, textarea, select').forEach(el => {
                    const name = el.getAttribute('name');
                    if (!name || name === 'message' || name === 'subject') return;
                    if (name === 'username[]') hasUsernameArrayField = true;
                    if ((el.type === 'checkbox' || el.type === 'radio') && !el.checked) return;
                    if (el.type === 'submit') return;
                    formData.append(name, el.value || '');
                });

                if (hasUsernameArrayField) formData.set('username[]', username);
                else formData.set('username', username);

                formData.set('subject', subject);
                formData.set('message', message);

                const submitBtn = form.querySelector('input[type="submit"][name="post"]');
                formData.set('post', submitBtn ? submitBtn.value : 'Enviar');

                const action = form.getAttribute('action') || '/privmsg';
                const sendResp = await fetch(action, {
                    method: 'POST',
                    body: formData,
                    credentials: 'same-origin'
                });

                if (!sendResp.ok) return false;

                const textLower = (await sendResp.text()).toLowerCase();
                if (textLower.includes('não existe') || textLower.includes('flood')) return false;

                return true;
            } catch (error) {
                return false;
            }
        };

        // --- LOGIC HELPERS ---
        const generateId = () => Math.random().toString(36).substr(2, 9);
        const parseRowsToBlocks = (rows) => {
            let i = 0;
            const parseLevel = (untilTags = [], parentId = undefined) => {
                const currentBlocks = [];
                while (i < rows.length) {
                    const row = rows[i];
                    const tag = row.tag.toLowerCase();
                    if (untilTags.includes(tag)) return currentBlocks;
                    const currentId = generateId();
                    if (tag === 's1') {
                        i++; const children = parseLevel(['s2'], currentId);
                        currentBlocks.push({ id: currentId, parentId: parentId, type: 'group', tag: 's1', content: row.content, extra: row.extra, children, level: 1 });
                        i++;
                    } else if (tag === 's3') {
                        i++; const children = parseLevel(['s4'], currentId);
                        currentBlocks.push({ id: currentId, parentId: parentId, type: 'group', tag: 's3', content: row.content, extra: row.extra, children, level: 2 });
                        i++;
                    } else if (tag === 's2' || tag === 's4') return currentBlocks;
                    else { currentBlocks.push({ id: currentId, parentId: parentId, type: 'leaf', tag: tag, content: row.content, extra: row.extra }); i++; }
                }
                return currentBlocks;
            };
            return parseLevel();
        };

        const parseDateHelper = (dateStr) => {
            try {
                const [datePart, timePart] = dateStr.split(' ');
                if (!datePart) return null;
                const [day, month, year] = datePart.split('/');
                const [hour, minute, second] = timePart ? timePart.split(':') : ['00', '00', '00'];
                return new Date(Number(year), Number(month) - 1, Number(day), Number(hour), Number(minute), Number(second || 0));
            } catch (e) { return null; }
        };

        const stripTags = (str) => {
            if (!str) return '';
            let text = str.replace(/<br\s*\/?>/gi, ' ');
            return text.replace(/<[^>]+>/g, '');
        };

        const convertBBCodeToHtml = (text) => {
            if (!text) return '';
            return text
                .replace(/\[b\]/gi, '<b>').replace(/\[\/b\]/gi, '</b>')
                .replace(/\[i\]/gi, '<i>').replace(/\[\/i\]/gi, '</i>')
                .replace(/\[u\]/gi, '<u>').replace(/\[\/u\]/gi, '</u>')
                .replace(/\[color=([^\]]+)\]/gi, '<color=$1>').replace(/\[\/color\]/gi, '</color>')
                .replace(/\[url=([^\]]+)\]/gi, '<a href="$1">').replace(/\[\/url\]/gi, '</a>')
                .replace(/\[br\]/gi, '<br>');
        };

        // --- RICH TEXT RENDERER ---
        const RichText = ({ text, className }) => {
            if (!text) return null;

            const parts = text.split(/(<\/?(?:b|i|u|a(?: [^>]+)?|color(?:=[^>]+)?|br)\s*\/?>)/gi);
            let currentStyle = { fontWeight: 'normal', fontStyle: 'normal', textDecoration: 'none', color: 'inherit' };
            const colorStack = [];
            let currentLink = null;
            let currentTarget = '_blank';

            return (
                <span className={className}>
                    {parts.map((part, i) => {
                        if (!part) return null;
                        const lowerPart = part.toLowerCase();
                        if (lowerPart.match(/^<b\s*\/?>$/)) { currentStyle.fontWeight = 'bold'; return null; }
                        if (lowerPart === '</b>') { currentStyle.fontWeight = 'normal'; return null; }
                        if (lowerPart.match(/^<i\s*\/?>$/)) { currentStyle.fontStyle = 'italic'; return null; }
                        if (lowerPart === '</i>') { currentStyle.fontStyle = 'normal'; return null; }
                        if (lowerPart.match(/^<u\s*\/?>$/)) { currentStyle.textDecoration = 'underline'; return null; }
                        if (lowerPart === '</u>') { currentStyle.textDecoration = 'none'; return null; }

                        const colorMatch = part.match(/^<color=([^>]+)>$/i);
                        if (colorMatch) { colorStack.push(currentStyle.color); currentStyle.color = colorMatch[1]; return null; }
                        if (lowerPart === '</color>') { currentStyle.color = colorStack.pop() || 'inherit'; return null; }

                        if (lowerPart.startsWith('<a ')) {
                            const hrefMatch = part.match(/href=["']?([^"'\s>]+)["']?/i);
                            const targetMatch = part.match(/target=["']?([^"'\s>]+)["']?/i);

                            if (hrefMatch) {
                                currentLink = hrefMatch[1];
                                if (targetMatch) {
                                    currentTarget = targetMatch[1];
                                } else if (currentLink.startsWith('#')) {
                                    currentTarget = '_self';
                                } else {
                                    currentTarget = '_blank';
                                }
                            }
                            return null;
                        }
                        if (lowerPart === '</a>') { currentLink = null; currentTarget = '_blank'; return null; }
                        if (lowerPart.match(/^<br\s*\/?>$/)) { return <br key={i} />; }

                        if (currentLink) {
                            return (
                                <a
                                    key={i}
                                    href={currentLink}
                                    style={{ ...currentStyle, textDecoration: 'underline' }}
                                    target={currentTarget}
                                    rel={currentTarget === '_blank' ? "noreferrer" : undefined}
                                    className="text-blue-600 dark:text-blue-400 hover:text-brand hover:opacity-80 transition-colors"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    {part}
                                </a>
                            );
                        }
                        return <span key={i} style={{ ...currentStyle }}>{part}</span>;
                    })}
                </span>
            );
        };

        // --- COMPONENTS ---
        const BrandHeader = () => (
            <div className="flex items-center gap-3 lg:gap-4 select-none">
                <div className="relative"><img src={LOGO_URL} alt="CFO" className="h-7 lg:h-12 w-auto drop-shadow-lg" /></div>
                <div className="hidden md:flex flex-col leading-none">
                    <div className="flex items-baseline gap-1.5">
                        <span className="text-2xl font-condensed font-bold text-slate-900 dark:text-white italic tracking-tighter">CENTRO</span>
                        <span className="text-sm font-serif italic text-brand">de</span>
                        <span className="text-2xl font-condensed font-bold text-slate-900 dark:text-white italic tracking-tighter">FORMAÇÃO</span>
                    </div>
                    <div className="flex items-baseline gap-1.5 -mt-1">
                        <span className="text-sm font-serif italic text-brand">de</span>
                        <span className="text-xl font-display uppercase text-slate-900 dark:text-white tracking-widest">OFICIAIS</span>
                    </div>
                </div>
            </div>
        );

        const Slideshow = () => {
            const [current, setCurrent] = useState(0);
            const [slidesData, setSlidesData] = useState([]);
            const [loading, setLoading] = useState(true);

            useEffect(() => {
                const fetchSlides = async () => {
                    try {
                        const rows = await fetchCSV(SLIDESHOW_GID);
                        const images = rows.map(r => r[0]).filter(url => url && url.startsWith('http'));
                        setSlidesData(images);
                    } catch (e) {
                        console.error("Failed to load slides", e);
                    } finally {
                        setLoading(false);
                    }
                };
                fetchSlides();
            }, []);

            useEffect(() => {
                if (slidesData.length === 0) return;
                const timer = setInterval(() => setCurrent(c => (c + 1) % slidesData.length), 6000);
                return () => clearInterval(timer);
            }, [slidesData.length]);

            if (loading || slidesData.length === 0) {
                return (
                    <div className="w-full h-[180px] sm:h-[250px] md:h-[380px] bg-[#0a0f0b] rounded-sm relative overflow-hidden group shadow-2xl border-y border-brand/20 mb-10 flex items-center justify-center">
                        <Loader2 className="animate-spin text-brand" size={32} />
                    </div>
                );
            }

            return (
                <div className="w-full h-[180px] sm:h-[250px] md:h-[380px] bg-[#0a0f0b] rounded-sm relative overflow-hidden group shadow-2xl border-y border-brand/20 mb-10">
                    {slidesData.map((url, i) => (
                        <div key={i} className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                            <div className="relative w-full h-full bg-[#0a0f0b] flex items-center justify-center overflow-hidden">
                                <img src={url} className="w-full h-full object-cover opacity-80" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f0b] via-transparent to-transparent opacity-60"></div>
                            </div>
                        </div>
                    ))}

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                        {slidesData.map((_, i) => (
                            <button key={i} onClick={() => setCurrent(i)} className={`h-1.5 transition-all duration-300 rounded-full ${i === current ? 'w-8 bg-brand' : 'w-2 bg-white/20 hover:bg-white/40'}`} ></button>
                        ))}
                    </div>

                    <button onClick={() => setCurrent(c => (c - 1 + slidesData.length) % slidesData.length)} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 text-white/20 hover:text-white hover:bg-black/30 rounded-full transition-all opacity-0 group-hover:opacity-100"><ArrowLeft size={24} /></button>
                    <button onClick={() => setCurrent(c => (c + 1) % slidesData.length)} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 text-white/20 hover:text-white hover:bg-black/30 rounded-full transition-all opacity-0 group-hover:opacity-100"><ArrowRight size={24} /></button>
                </div>
            );
        };

        const NoticeBoard = () => {
            const [data, setData] = useState({ title: 'Carregando...', message: '...' });

            useEffect(() => {
                const load = async () => {
                    try {
                        const rows = await fetchCSV(NOTICES_GID);
                        if (rows.length >= 2) {
                            setData({ title: rows[1][0] || 'Aviso', message: rows[1][1] || '' });
                        } else {
                            setData({ title: 'Sem avisos', message: '' });
                        }
                    } catch (e) {
                        setData({ title: 'Erro de conexão', message: 'Não foi possível carregar os avisos.' });
                    }
                };
                load();
            }, []);

            return (
                <div className="bg-[#1c261e] p-6 md:p-8 text-white flex flex-col justify-end relative overflow-hidden shadow-tactical border border-brand/20 rounded-sm h-full min-h-[250px]">
                    <div className="absolute top-0 right-0 p-6 opacity-10"><img src={LOGO_URL} className="h-40 w-auto grayscale" /></div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-4 text-brand-accent">
                            <AlertCircle size={18} />
                            <span className="text-xs font-bold uppercase tracking-widest">Quadro de Avisos</span>
                        </div>
                        <h3 className="text-xl font-condensed font-bold uppercase tracking-wide text-white mb-2">{data.title}</h3>
                        <p className="text-xs font-medium opacity-70 leading-relaxed whitespace-pre-wrap">{data.message}</p>
                    </div>
                </div>
            );
        };

        const Navbar = ({ user, onMenuClick, currentView, navigateTo, menuItems, theme, toggleTheme, onLogout }) => {
            const [activeDropdown, setActiveDropdown] = useState(null);
            const dropdownRef = useRef(null);
            const getHabboAvatar = (nickname) => `https://www.habbo.com.br/habbo-imaging/avatarimage?user=${encodeURIComponent(nickname || '')}&direction=3&head_direction=3&gesture=sml&size=m&headonly=1`;

            useEffect(() => {
                const handleClickOutside = (event) => {
                    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) setActiveDropdown(null);
                };
                document.addEventListener('mousedown', handleClickOutside);
                return () => document.removeEventListener('mousedown', handleClickOutside);
            }, []);

            return (
                <header className="h-14 lg:h-20 bg-white dark:bg-dark-surface shadow-md sticky top-0 z-[900] px-3 lg:px-8 flex items-center justify-between transition-colors duration-300 border-b-[3px] lg:border-b-4 border-brand">
                    <div className="flex items-center gap-3 lg:gap-8">
                        <button onClick={onMenuClick} className="lg:hidden p-1.5 text-slate-500 hover:bg-slate-100 dark:hover:bg-dark-hover rounded transition-colors"><Menu size={20} /></button>
                        <BrandHeader />
                        {user && (
                            <nav className="hidden lg:flex items-center gap-2 ml-8" ref={dropdownRef}>
                                <button
                                    onClick={() => navigateTo('home')}
                                    className={`group flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 ease-out ${currentView === 'home' ? 'bg-brand text-white shadow-md pl-4 pr-5' : 'text-slate-400 hover:text-brand hover:bg-slate-50 dark:hover:bg-white/5'}`}
                                >
                                    <CustomHomeIcon size={20} className={`shrink-0 transition-transform duration-300 ${currentView !== 'home' && 'group-hover:scale-110'}`} />
                                    <span className={`overflow-hidden whitespace-nowrap transition-all duration-300 ease-out ${currentView === 'home' ? 'max-w-[100px] opacity-100' : 'max-w-0 opacity-0 group-hover:max-w-[100px] group-hover:opacity-100'}`}>
                                        <span className="text-xs font-bold uppercase tracking-widest font-condensed pl-1">Início</span>
                                    </span>
                                </button>

                                <div className="h-6 w-px bg-slate-200 dark:bg-white/10 mx-2"></div>

                                {menuItems.map(item => (
                                    <button
                                        key={item.id}
                                        onClick={() => navigateTo(item.id)}
                                        className={`group flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 ease-out ${currentView === item.id ? 'bg-brand/10 text-brand ring-1 ring-brand/20 pl-4 pr-5' : 'text-slate-400 hover:text-brand hover:bg-slate-50 dark:hover:bg-white/5'}`}
                                    >
                                        <div className={`shrink-0 transition-transform duration-300 ${currentView !== item.id && 'group-hover:scale-110'}`}>
                                            {React.createElement(item.icon, { size: 20 })}
                                        </div>
                                        <span className={`overflow-hidden whitespace-nowrap transition-all duration-300 ease-out ${currentView === item.id ? 'max-w-[200px] opacity-100' : 'max-w-0 opacity-0 group-hover:max-w-[200px] group-hover:opacity-100'}`}>
                                            <span className="text-xs font-bold uppercase tracking-widest font-condensed pl-1">{item.label}</span>
                                        </span>
                                    </button>
                                ))}
                            </nav>
                        )}
                    </div>
                    <div className="flex items-center gap-2 sm:gap-4">
                        <button onClick={toggleTheme} className="hidden lg:flex items-center justify-center w-10 h-10 rounded bg-slate-100 dark:bg-dark-element text-slate-600 dark:text-slate-300 hover:bg-brand hover:text-white transition-colors" title="Alternar Tema">{theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}</button>
                        {user && (
                            <div className="flex items-center gap-4 relative" ref={dropdownRef}>
                                <div onClick={() => setActiveDropdown(activeDropdown === 'profile' ? null : 'profile')} className="flex items-center gap-3 pl-2 cursor-pointer hover:opacity-80 transition-opacity">
                                    <div className="text-right hidden xl:block">
                                        <p className="text-sm font-bold text-slate-800 dark:text-white leading-tight font-condensed uppercase">{user.nickname}</p>
                                        <p className="text-[10px] text-brand font-bold uppercase tracking-widest leading-tight mt-0.5">{user.role}</p>
                                    </div>
                                    <div className="w-8 h-8 md:w-10 md:h-10 bg-slate-100 dark:bg-dark-element rounded-full overflow-hidden flex items-center justify-center shadow-sm border border-slate-300 dark:border-slate-700">
                                        <img src={getHabboAvatar(user.nickname)} alt={user.nickname} className="scale-110" onError={(e) => { (e.target).style.display = 'none'; }} />
                                    </div>
                                    <ChevronDown size={14} className={`text-slate-400 transition-transform ${activeDropdown === 'profile' ? 'rotate-180' : ''}`} />
                                </div>

                                {activeDropdown === 'profile' && (
                                    <div className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-dark-surface border border-slate-200 dark:border-white/10 rounded-sm shadow-xl py-1 z-50 animate-fade-in">
                                        <button onClick={onLogout} className="w-full text-left px-4 py-3 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/10 flex items-center gap-2 font-bold uppercase tracking-wide">
                                            <LogOut size={16} /> Sair
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </header>
            );
        };

        const CopyableText = ({ block, status, onInteract, attachedAnswer, processedContent, textSizeClass }) => {
            const [copied, setCopied] = useState(false);
            const isTitle = block.tag === 'title';
            const isQuestion = block.tag === 'p';

            const handleInteraction = (e) => {
                e.stopPropagation();
                const textToCopy = stripTags(processedContent || '');
                navigator.clipboard.writeText(textToCopy);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
                onInteract(block.id);
            };

            if (isTitle) {
                return (
                    <div onClick={handleInteraction} className={`flex items-end justify-between py-4 mt-10 mb-6 gap-4 border-b border-brand/10 select-none group cursor-pointer hover:bg-brand/5 rounded-sm px-4 transition-all duration-200`}>
                        <div className="flex items-center gap-4 w-full">
                            <div className="h-6 w-1.5 bg-brand rounded-full"></div>
                            <h3 className={`font-poppins font-semibold text-2xl uppercase tracking-tight leading-none ${status.isSkipped ? 'text-red-600' : 'text-slate-800 dark:text-white group-hover:text-brand'}`}><RichText text={processedContent} /></h3>
                        </div>
                        <div className={`text-slate-300 group-hover:text-brand transition-colors`}>{copied ? <CheckCircle size={24} className="text-green-600" /> : <Copy size={20} />}</div>
                    </div>
                );
            }

            if (isQuestion) {
                return (
                    <div className="mb-3 group">
                        <div
                            onClick={handleInteraction}
                            className={`
                        flex gap-4 items-start px-4 py-3 rounded-md cursor-pointer transition-all duration-200 border border-transparent
                        ${status.isSkipped
                                    ? 'bg-red-50 dark:bg-red-900/10 border-red-100 dark:border-red-900/20'
                                    : status.isClicked
                                        ? 'opacity-60'
                                        : 'bg-slate-50/50 dark:bg-white/5 hover:bg-white dark:hover:bg-dark-element hover:shadow-sm hover:border-slate-100 dark:hover:border-white/10'
                                }
                    `}
                        >
                            <div className="shrink-0 mt-1">
                                {status.isClicked
                                    ? <CheckCircle2 size={18} className="text-brand opacity-70" />
                                    : status.isSkipped
                                        ? <AlertCircle size={18} className="text-red-500 opacity-70" />
                                        : <div className={`w-4 h-4 rounded-full border-2 ${status.isClicked ? 'border-brand' : 'border-slate-300 dark:border-slate-600 group-hover:border-brand'} transition-colors`}></div>
                                }
                            </div>
                            <div className="flex-1 min-w-0 pt-0.5">
                                <p className={`${textSizeClass} font-poppins font-medium leading-relaxed text-slate-800 dark:text-slate-100 ${status.isClicked ? 'line-through decoration-slate-400/50 text-slate-500' : ''}`}>
                                    <RichText text={processedContent} />
                                </p>
                                {attachedAnswer && (
                                    <div className={`mt-2 ${status.isSkipped ? 'opacity-50' : ''} border-l-2 border-brand/20 pl-3 ml-1`}>
                                        <p className="text-sm font-poppins text-slate-600 dark:text-slate-400 leading-relaxed italic">
                                            <RichText text={attachedAnswer.content} />
                                        </p>
                                    </div>
                                )}
                            </div>
                            <div className="shrink-0 self-start mt-0.5">
                                <button className={`p-2 rounded hover:bg-brand/10 transition-colors ${copied ? 'text-green-600' : 'text-slate-300 hover:text-brand'}`}>
                                    {copied ? <Check size={16} /> : <Copy size={16} />}
                                </button>
                            </div>
                        </div>
                    </div>
                );
            }

            return (
                <div className={`relative flex items-center justify-between py-2 mb-1 gap-4 group px-4 rounded-sm transition-all duration-200 cursor-pointer ${status.isClicked ? 'opacity-50' : status.isSkipped ? 'bg-red-50/50' : 'hover:bg-slate-50 dark:hover:bg-white/5'}`} onClick={handleInteraction}>
                    <div className="w-full flex items-start gap-3">
                        <div className={`shrink-0 mt-2 w-1.5 h-1.5 rounded-full ${status.isClicked ? 'bg-brand/30' : 'bg-slate-300 dark:bg-slate-600 group-hover:bg-brand'}`}></div>
                        <div className={`font-poppins ${textSizeClass} leading-relaxed whitespace-pre-wrap break-words font-normal ${status.isClicked ? 'line-through decoration-slate-300 text-slate-500' : 'text-slate-700 dark:text-slate-300'}`}><RichText text={processedContent} /></div>
                    </div>
                    <div className={`shrink-0 ${copied ? 'textgreen-600' : 'text-slate-300 hover:text-brand'}`}>{copied ? <Check size={16} /> : <Copy size={16} />}</div>
                </div>
            );
        };

        const PrivateMessage = ({ block, status, onInteract }) => {
            const [isOpen, setIsOpen] = useState(false);
            const [nickname, setNickname] = useState('');
            const [sendState, setSendState] = useState('idle');
            const [progressText, setProgressText] = useState('Enviar');
            const [sentRecipient, setSentRecipient] = useState(null);

            const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

            const handleSend = async () => {
                if (!nickname.trim()) return;

                const subject = block.content || "Mensagem do Instrutor";
                const rawMessage = block.extra || "";

                const recipients = nickname.split('/').map(n => n.trim()).filter(n => n.length > 0);

                if (recipients.length === 0) return;

                setSendState('sending');
                let successCount = 0;
                let failCount = 0;
                let failedNicks = [];

                for (let i = 0; i < recipients.length; i++) {
                    const recipient = recipients[i];

                    setProgressText(`(${i + 1}/${recipients.length}) Enviando para ${recipient}...`);

                    try {
                        const success = await sendPrivateMessage(recipient, subject, rawMessage);

                        if (success) {
                            successCount++;
                        } else {
                            failCount++;
                            failedNicks.push(recipient);
                            console.warn(`Falha ao enviar para ${recipient}.`);
                        }
                    } catch (error) {
                        failCount++;
                        failedNicks.push(recipient);
                    }

                    if (i < recipients.length - 1) {
                        for (let s = 10; s > 0; s--) {
                            setProgressText(`Aguardando anti-spam... ${s}s`);
                            await delay(1000);
                        }
                    }
                }

                if (successCount > 0) {
                    onInteract(block.id);
                    setSentRecipient(recipients.join(', '));
                    setSendState('sent');
                    setProgressText('Concluído');

                    if (failCount > 0) {
                        alert(`Enviado para: ${successCount}.\nFalha ao enviar para: ${failedNicks.join(', ')}.`);
                    }

                    setTimeout(() => {
                        setIsOpen(false);
                        setSendState('idle');
                        setNickname('');
                        setProgressText('Enviar');
                    }, 2000);
                } else {
                    setSendState('idle');
                    setProgressText('Tentar Novamente');
                    alert(`Falha total. Nicks não enviados: ${failedNicks.join(', ')}.`);
                }
            };

            if (status.isClicked) {
                return (
                    <div className="my-4 animate-fade-in select-none">
                        <div className="bg-blue-500/5 dark:bg-blue-500/10 p-3 border-l-4 border-blue-500 rounded-r-sm flex items-center justify-between">
                            <div className="flex flex-col">
                                <div className="flex items-center gap-2 mb-1"><span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 font-condensed">MP Enviada</span><CheckCircle2 size={12} className="text-blue-500" /></div>
                                <div className="text-xs text-slate-600 dark:text-slate-400 font-mono">Para: <span className="text-slate-900 dark:text-white font-bold">{sentRecipient}</span></div>
                            </div>
                        </div>
                    </div>
                );
            }

            if (!isOpen) {
                return (
                    <div className="my-6">
                        <button onClick={() => setIsOpen(true)} className="w-full flex items-center justify-between p-4 bg-brand/5 hover:bg-brand/10 border border-brand/20 hover:border-brand/40 rounded-sm transition-all group">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-brand/10 flex items-center justify-center text-brand border border-brand/20 overflow-hidden"><img src="https://i.imgur.com/olTorAq.png" alt="" className="w-5 h-5 object-contain opacity-80" /></div>
                                <div className="text-left"><span className="block text-xs font-bold uppercase tracking-widest text-brand font-condensed">Mensagem Privada</span><span className="text-[10px] text-slate-500 font-mono italic truncate max-w-[200px] block font-poppins"><RichText text={block.content} /></span></div>
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-brand flex items-center gap-1 transition-colors">Abrir <ChevronRight size={14} /></span>
                        </button>
                    </div>
                );
            }

            return (
                <div className="my-6 animate-fade-in bg-white dark:bg-[#0c120e] border border-brand/30 rounded-sm shadow-lg overflow-hidden relative">
                    <div className="bg-brand/10 px-4 py-2 flex items-center justify-between border-b border-brand/10">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-brand font-condensed flex items-center gap-2"><Lock size={10} /> Mensagem Privada</span>
                        <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-red-500 transition-colors"><X size={14} /></button>
                    </div>
                    <div className="p-4 flex flex-col md:flex-row gap-2">
                        <div className="flex-1 relative">
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"><Users size={16} /></div>
                            <input type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSend()} placeholder="NICK1 / NICK2 / NICK3" className="w-full bg-slate-100 dark:bg-dark-element pl-10 pr-4 py-3 text-sm font-bold uppercase text-slate-900 dark:text-white placeholder-slate-400 outline-none border border-slate-200 dark:border-slate-700 rounded-sm focus:border-brand focus:ring-1 focus:ring-brand font-condensed tracking-wide" autoFocus />
                        </div>
                        <button onClick={handleSend} disabled={!nickname.trim() || sendState !== 'idle'} className="px-6 py-3 md:py-0 bg-brand hover:bg-brand-hover text-white rounded-sm font-bold uppercase text-xs tracking-widest disabled:opacity-50 transition-all flex items-center justify-center min-w-[150px]">
                            {sendState === 'sending' ? (
                                <div className="flex items-center gap-2">
                                    <Loader2 size={14} className="animate-spin" />
                                    <span className="truncate max-w-[120px]">{progressText}</span>
                                </div>
                            ) : sendState === 'sent' ? <Check size={16} /> : 'Enviar'}
                        </button>
                    </div>
                </div>
            );
        };

        const Spoiler = ({ block, childrenNodes }) => {
            const [isOpen, setIsOpen] = useState(false);
            const isOuter = block.level === 1;
            const title = block.content && block.content.trim() !== '' ? block.content : (isOuter ? 'Conteúdo Classificado' : 'Informação Adicional');

            return (
                <div className={`my-4 rounded-md border ${isOuter ? 'border-slate-200 dark:border-white/10 bg-white dark:bg-white/5' : 'border-slate-200/50 dark:border-white/5 bg-slate-50 dark:bg-black/20'} overflow-hidden shadow-sm transition-all duration-300`}>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`w-full flex items-center justify-between p-4 text-left transition-colors hover:bg-slate-50 dark:hover:bg-white/5 ${isOpen ? 'border-b border-slate-100 dark:border-white/5' : ''}`}
                    >
                        <div className="flex items-center gap-3">
                            <div className={`p-1.5 rounded-sm transition-all ${isOpen ? 'bg-brand text-white' : 'bg-slate-100 dark:bg-white/10 text-slate-400'}`}>
                                <ChevronRight size={16} className={`transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} />
                            </div>
                            <span className={`font-poppins font-semibold uppercase tracking-wide ${isOuter ? 'text-sm text-slate-800 dark:text-white' : 'text-xs text-slate-600 dark:text-slate-300'}`}>
                                <RichText text={title} />
                            </span>
                        </div>
                    </button>
                    <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                        <div className="overflow-hidden">
                            <div className="p-4 md:p-5 pt-2">
                                {childrenNodes}
                            </div>
                        </div>
                    </div>
                </div>
            );
        };

        const ContentRenderer = ({ blocks, onSkipWarning, currentUser, textZoom = 0 }) => {
            const processedBlocks = useMemo(() => {
                const groupNodes = (nodes) => {
                    if (!nodes) return [];
                    const result = [];
                    let currentMexGroup = null;

                    for (let i = 0; i < nodes.length; i++) {
                        const node = nodes[i];

                        if (node.tag === 'mex') {
                            if (!currentMexGroup) {
                                currentMexGroup = { id: `mex-group-${node.id}`, tag: 'mex-group', items: [node] };
                                result.push(currentMexGroup);
                            } else {
                                currentMexGroup.items.push(node);
                            }
                            continue;
                        } else {
                            currentMexGroup = null;
                        }

                        if (node.tag === 'p') {
                            const nextNode = (i + 1 < nodes.length) ? nodes[i + 1] : null;
                            if (nextNode && nextNode.tag === 'rep') {
                                result.push({ id: `qa-group-${node.id}`, tag: 'qa-group', question: node, answer: nextNode });
                                i++;
                                continue;
                            }
                        }

                        if (node.children) {
                            result.push({ ...node, children: groupNodes(node.children) });
                        } else {
                            result.push(node);
                        }
                    }
                    return result;
                };
                return groupNodes(blocks);
            }, [blocks]);

            const processBlocks = (blocks) => { const nodeMap = new Map(); const sequence = []; const traverse = (nodes) => { nodes.forEach(node => { nodeMap.set(node.id, node); if (node.type === 'leaf' && ['line', 'title', 'p'].includes(node.tag || '')) sequence.push(node.id); if (node.children) traverse(node.children); }); }; traverse(blocks); return { nodeMap, sequence }; };
            const { nodeMap, sequence } = useMemo(() => processBlocks(blocks), [blocks]);
            const [clickedIds, setClickedIds] = useState(new Set());
            const skippedIds = useMemo(() => { if (clickedIds.size === 0) return new Set(); const skipped = new Set(); let maxIndex = -1; sequence.forEach((id, idx) => { if (clickedIds.has(id)) maxIndex = idx; }); if (maxIndex === -1) return skipped; for (let i = 0; i < maxIndex; i++) { const candidateId = sequence[i]; if (!clickedIds.has(candidateId)) skipped.add(candidateId); } return skipped; }, [clickedIds, sequence]);

            const handleInteract = useCallback((id) => {
                const indexInSeq = sequence.indexOf(id);
                if (indexInSeq !== -1) {
                    const firstUnclicked = sequence.findIndex(sid => !clickedIds.has(sid));
                    if (firstUnclicked !== -1 && indexInSeq > firstUnclicked) onSkipWarning();
                }
                setClickedIds(prev => { const n = new Set(prev); n.add(id); return n; });
            }, [sequence, clickedIds, onSkipWarning]);

            const zoomClass = useMemo(() => {
                if (textZoom === 0) return 'text-sm md:text-base';
                if (textZoom === 1) return 'text-base md:text-lg';
                return 'text-lg md:text-xl';
            }, [textZoom]);

            const processText = (text) => {
                if (!text || typeof text !== 'string') return text;
                let processed = text.replace(/{USERNAME}/g, currentUser?.nickname || 'Aluno');
                return convertBBCodeToHtml(processed);
            };

            const renderBlock = (block) => {
                const status = { isClicked: clickedIds.has(block.id), isSkipped: skippedIds.has(block.id) };
                const processedContent = processText(block.content);

                switch (block.tag) {
                    case 'mt':
                        return (
                            <div key={block.id} className="relative mt-20 mb-10 group">
                                <div className="absolute -top-6 -left-6 text-[5rem] md:text-[8rem] font-display font-bold text-brand/5 dark:text-brand/10 select-none z-0 pointer-events-none group-hover:text-brand/10 transition-colors">#</div>
                                <div className="relative z-10 pl-6 border-l-4 border-brand">
                                    <h2 className="text-3xl md:text-5xl font-poppins font-bold text-slate-900 dark:text-white uppercase tracking-tight leading-none drop-shadow-sm">
                                        <RichText text={processedContent} />
                                    </h2>
                                </div>
                            </div>
                        );
                    case 'mst':
                        return (
                            <div key={block.id} className="mt-12 mb-6 flex items-center gap-4 group">
                                <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-white/10 flex items-center justify-center text-brand font-bold text-xs shadow-sm border border-slate-200 dark:border-white/10 group-hover:bg-brand group-hover:text-white transition-colors">
                                    <ChevronRight size={16} />
                                </div>
                                <h3 className="text-xl font-poppins font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wide decoration-brand/30 decoration-2 underline-offset-4 group-hover:underline transition-all">
                                    <RichText text={processedContent} />
                                </h3>
                            </div>
                        );
                    case 'mtxt':
                        return (
                            <div key={block.id} className="mb-4 pl-0 md:pl-12">
                                <p className={`${zoomClass} text-slate-600 dark:text-slate-300 leading-relaxed font-poppins font-medium text-justify`}>
                                    <RichText text={processedContent} />
                                </p>
                            </div>
                        );
                    case 'minfo':
                        return (
                            <div key={block.id} className="ml-0 md:ml-12 my-6 bg-blue-50/50 dark:bg-blue-900/10 border-l-4 border-blue-500 rounded-r-sm p-4 md:p-5 flex gap-4 shadow-sm items-start">
                                <div className="shrink-0 mt-1 text-blue-500"><Info size={20} /></div>
                                <div>
                                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-1 font-condensed">Nota Didática</h4>
                                    <div className={`${zoomClass} text-slate-700 dark:text-slate-300 leading-relaxed font-poppins`}>
                                        <RichText text={processedContent} />
                                    </div>
                                </div>
                            </div>
                        );
                    case 'malert':
                        return (
                            <div key={block.id} className="ml-0 md:ml-12 my-6 bg-red-50/50 dark:bg-red-900/10 border-l-4 border-red-500 rounded-r-sm p-4 md:p-5 flex gap-4 shadow-sm items-start">
                                <div className="shrink-0 mt-1 text-red-500"><AlertTriangle size={20} /></div>
                                <div>
                                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-red-600 dark:text-red-400 mb-1 font-condensed">Ponto de Atenção</h4>
                                    <div className={`${zoomClass} font-bold text-red-900 dark:text-red-200 leading-relaxed font-poppins`}>
                                        <RichText text={processedContent} />
                                    </div>
                                </div>
                            </div>
                        );
                    case 'att1':
                        return (
                            <div key={block.id} className="ml-0 md:ml-12 my-6 bg-red-50/50 dark:bg-red-900/10 border-l-4 border-red-500 rounded-r-sm p-4 md:p-5 flex gap-4 shadow-sm items-start">
                                <div className="shrink-0 mt-1 text-red-500"><AlertTriangle size={20} /></div>
                                <div>
                                    <div className={`${zoomClass} text-slate-700 dark:text-slate-300 leading-relaxed font-poppins font-medium`}>
                                        <RichText text={processedContent} />
                                    </div>
                                </div>
                            </div>
                        );
                    case 'mex-group':
                        return (
                            <div key={block.id} className="ml-0 md:ml-12 my-10 group">
                                <div className="relative">
                                    <div className="absolute -top-3 left-4 bg-brand text-white px-3 py-1 text-[9px] font-bold uppercase tracking-widest font-condensed rounded-sm shadow-md z-20 flex items-center gap-2">
                                        <Code size={10} className="text-brand-accent" />
                                        <span>{block.items.length > 1 ? 'Exemplos' : 'Exemplo'}</span>
                                    </div>
                                    <div className="bg-slate-50/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-sm p-4 md:p-6 pt-8">
                                        <div className="flex flex-col gap-3">
                                            {block.items.map((item, idx) => (
                                                <div key={item.id} className={`${idx > 0 ? 'pt-3 border-t border-dashed border-slate-200 dark:border-white/10' : ''} flex gap-4 items-start`}>
                                                    <div className="shrink-0 text-brand font-bold font-mono text-xs mt-0.5 bg-brand/10 w-5 h-5 flex flex-col items-center justify-center rounded-full leading-none">{idx + 1}</div>
                                                    <div className={`flex-1 ${zoomClass} text-slate-600 dark:text-slate-300 font-medium leading-relaxed font-mono italic`}>
                                                        <RichText text={processText(item.content)} />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    case 'mlist':
                        return (
                            <div key={block.id} className="ml-0 md:ml-16 mb-2 flex items-start gap-3 group">
                                <div className="mt-0.5 shrink-0 text-brand/60 group-hover:text-brand transition-colors"><CheckCircle2 size={16} /></div>
                                <p className={`${zoomClass} text-slate-700 dark:text-slate-300 leading-relaxed font-poppins group-hover:text-slate-900 dark:group-hover:text-white transition-colors text-justify flex-1`}>
                                    <RichText text={processedContent} />
                                </p>
                            </div>
                        );
                    case 'mpoin':
                        return (
                            <div key={block.id} className="ml-2 md:ml-16 mb-2 flex items-start gap-3 group">
                                <div className="mt-1.5 shrink-0 w-1.5 h-1.5 bg-slate-400 dark:bg-slate-500 rounded-full group-hover:bg-brand transition-colors"></div>
                                <p className={`${zoomClass} text-slate-700 dark:text-slate-300 leading-relaxed font-poppins text-justify flex-1`}>
                                    <RichText text={processedContent} />
                                </p>
                            </div>
                        );
                    case 'mpoin2':
                        return (
                            <div key={block.id} className="ml-2 md:ml-16 mb-2 flex items-start gap-3 group">
                                <p className={`${zoomClass} text-slate-700 dark:text-slate-300 leading-relaxed font-poppins text-justify`}>
                                    <RichText text={processedContent} />
                                </p>
                            </div>
                        );
                    case 'mbr': return <div key={block.id} className="h-6 w-full"></div>;
                    case 'br': return <div key={block.id} className="h-3 w-full"></div>;
                    case 'title':
                    case 'line': return <CopyableText key={block.id} block={block} status={status} onInteract={handleInteract} processedContent={processedContent} textSizeClass={zoomClass} />;
                    case 'p': return <CopyableText key={block.id} block={block} status={status} onInteract={handleInteract} processedContent={processedContent} textSizeClass={zoomClass} />;
                    case 'qa-group':
                        const qaStatus = { isClicked: clickedIds.has(block.question.id), isSkipped: skippedIds.has(block.question.id) };
                        return <CopyableText key={block.id} block={block.question} status={qaStatus} onInteract={handleInteract} attachedAnswer={block.answer} processedContent={processText(block.question.content)} textSizeClass={zoomClass} />;
                    case 'mp': return <PrivateMessage key={block.id} block={block} status={status} onInteract={handleInteract} />;
                    case 'att': return (
                        <div className="flex items-start gap-3 my-4 px-4 py-3 bg-emerald-50/50 dark:bg-emerald-900/10 border-l-2 border-emerald-500/50 rounded-r-sm">
                            <div className="mt-0.5 shrink-0 opacity-80"><img src="https://i.imgur.com/Nzo9Lg1.png" className="w-4 h-4 object-contain" /></div>
                            <span className="text-sm font-poppins font-medium leading-relaxed text-emerald-900 dark:text-emerald-200"><RichText text={processedContent} /></span>
                        </div>
                    );
                    case 'rep': return (
                        <div className="ml-4 md:ml-8 my-2 pl-4 border-l-2 border-slate-200 dark:border-white/10">
                            <p className={`${zoomClass} text-slate-600 dark:text-slate-400 leading-relaxed font-poppins`}>
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mr-2 select-none font-condensed">Resposta:</span>
                                <span className="italic"><RichText text={processedContent} /></span>
                            </p>
                        </div>
                    );
                    case 's1':
                    case 's3': return <Spoiler key={block.id} block={block} childrenNodes={block.children?.map(child => renderBlock(child))} />;
                    default: return null;
                }
            };
            return <div className="w-full">{processedBlocks.map(block => renderBlock(block))}</div>;
        };

        const ClassHistoryList = ({ currentUser }) => {
            const [history, setHistory] = useState([]);
            const [ranking, setRanking] = useState({ headers: [], data: [] });
            const [loading, setLoading] = useState(true);
            const [searchTerm, setSearchTerm] = useState('');
            const [selectedType, setSelectedType] = useState('all');
            const [sortOrder, setSortOrder] = useState('newest');
            const [viewMode, setViewMode] = useState('history'); // 'history' or 'ranking'
            
            // Estado de Paginação
            const [currentPage, setCurrentPage] = useState(1);
            const itemsPerPage = 10;

            useEffect(() => {
                const loadData = async () => {
                    try {
                        const [historyData, rankingData] = await Promise.all([
                            fetchClassHistory(),
                            fetchRanking()
                        ]);

                        const sortedHistory = historyData.sort((a, b) => {
                            const dateA = parseDateHelper(a.startDateTime)?.getTime() || 0;
                            const dateB = parseDateHelper(b.startDateTime)?.getTime() || 0;
                            return dateB - dateA;
                        });
                        setHistory(sortedHistory);
                        setRanking(rankingData);
                    } catch (error) {
                        console.error("Failed to load data", error);
                    } finally {
                        setLoading(false);
                    }
                };
                loadData();
            }, []);

            const classTypes = useMemo(() => Array.from(new Set(history.map(item => item.className))).sort(), [history]);

            const filteredHistory = useMemo(() => {
                return history.filter(item => {
                    const searchLower = searchTerm.toLowerCase();
                    return (item.professor.toLowerCase().includes(searchLower) || item.students.toLowerCase().includes(searchLower) || item.className.toLowerCase().includes(searchLower)) && (selectedType === 'all' || item.className === selectedType);
                }).sort((a, b) => {
                    const dateA = parseDateHelper(a.startDateTime)?.getTime() || 0;
                    const dateB = parseDateHelper(b.startDateTime)?.getTime() || 0;
                    return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
                });
            }, [history, searchTerm, selectedType, sortOrder]);

            // Reseta a página para 1 quando há busca ou troca de abas/filtros
            useEffect(() => {
                setCurrentPage(1);
            }, [searchTerm, selectedType, sortOrder, viewMode]);

            // Cálculo dos itens exibidos baseados na paginação
            const currentHistoryItems = useMemo(() => {
                const start = (currentPage - 1) * itemsPerPage;
                return filteredHistory.slice(start, start + itemsPerPage);
            }, [filteredHistory, currentPage, itemsPerPage]);

            const totalHistoryPages = Math.ceil(filteredHistory.length / itemsPerPage) || 1;

            const currentRankingItems = useMemo(() => {
                const start = (currentPage - 1) * itemsPerPage;
                return ranking.data.slice(start, start + itemsPerPage);
            }, [ranking.data, currentPage, itemsPerPage]);

            const totalRankingPages = Math.ceil(ranking.data.length / itemsPerPage) || 1;

            if (loading) return (
                <div className="flex flex-col items-center justify-center py-20">
                    <Loader2 className="animate-spin text-brand mb-4" size={32} />
                    <p className="text-slate-400 font-condensed font-bold uppercase tracking-widest text-sm">Carregando registros...</p>
                </div>
            );

            return (
                <div className="space-y-6 animate-fade-in">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-4">
                        <div className="flex flex-col gap-1.5">
                            <h2 className="text-2xl font-condensed font-bold text-slate-900 dark:text-white uppercase italic tracking-tight">
                                {viewMode === 'ranking' ? 'Ranking de Aulas' : 'Relatório de Aulas'}
                            </h2>
                            <p className="text-slate-500 text-xs font-medium">
                                {viewMode === 'ranking' ? 'Visualização do desempenho da equipe.' : 'Histórico detalhado das aplicações.'}
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-2">
                            <a
                                href="https://docs.google.com/spreadsheets/d/1EgYrWXVYAqy_7Xpzou7kz2Ll4OZreFA92H1UJle3M9k/edit?gid=1278774364#gid=1278774364"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center justify-center gap-1.5 px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white rounded-sm text-[10px] md:text-xs font-bold uppercase tracking-wide transition-colors"
                            >
                                <Sheet size={14} /> Planilha Oficial
                            </a>
                            <button
                                onClick={() => setViewMode(prev => prev === 'history' ? 'ranking' : 'history')}
                                className={`flex items-center justify-center gap-1.5 px-3 py-1.5 border rounded-sm text-[10px] md:text-xs font-bold uppercase tracking-wide transition-colors ${viewMode === 'history' ? 'bg-brand text-white border-brand hover:bg-brand-hover' : 'bg-white dark:bg-[#121a14] border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5'}`}
                            >
                                {viewMode === 'history' ? <><CustomHTrophyIcon size={14} /> Ranking</> : <><CustomHistoryIcon size={14} /> Histórico</>}
                            </button>
                        </div>
                    </div>

                    {viewMode === 'history' && (
                        <>
                            <div className="flex flex-col md:flex-row gap-3">
                                <div className="relative flex-1">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                                    <input type="text" placeholder="Buscar..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#121a14] border border-slate-200 dark:border-white/10 rounded-sm focus:outline-none focus:border-brand transition-all font-medium text-slate-700 dark:text-white placeholder-slate-400 text-xs" />
                                </div>
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <div className="relative min-w-[160px]">
                                        <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                                        <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)} className="w-full pl-9 pr-8 py-2 bg-slate-50 dark:bg-[#121a14] border border-slate-200 dark:border-white/10 rounded-sm focus:outline-none focus:border-brand transition-all font-medium text-slate-700 dark:text-white appearance-none cursor-pointer text-xs">
                                            <option value="all">Todas as Aulas</option>
                                            {classTypes.map((type, idx) => (<option key={idx} value={type}>{type}</option>))}
                                        </select>
                                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={14} />
                                    </div>
                                    <div className="relative min-w-[150px]">
                                        <ArrowUpDown className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                                        <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} className="w-full pl-9 pr-8 py-2 bg-slate-50 dark:bg-[#121a14] border border-slate-200 dark:border-white/10 rounded-sm focus:outline-none focus:border-brand transition-all font-medium text-slate-700 dark:text-white appearance-none cursor-pointer text-xs">
                                            <option value="newest">Mais Recentes</option>
                                            <option value="oldest">Mais Antigas</option>
                                        </select>
                                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={14} />
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-[#0c120e] border border-slate-200 dark:border-brand/20 shadow-[0_0_15px_rgba(0,0,0,0.05)] dark:shadow-[0_0_15px_rgba(46,92,24,0.1)] rounded-sm overflow-hidden">
                                <div className="overflow-x-auto relative">
                                    <table className="w-full text-left border-collapse">
                                        <thead className="bg-slate-50 dark:bg-[#121a14] border-b border-brand/20 dark:border-brand/30">
                                            <tr className="text-[10px] uppercase tracking-widest text-brand dark:text-brand-light font-condensed font-bold">
                                                <th className="px-4 py-3 whitespace-nowrap">Data e Duração</th>
                                                <th className="px-4 py-3">Aula</th>
                                                <th className="px-4 py-3">Professor(a)</th>
                                                <th className="px-4 py-3">Aluno(s)</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-xs font-medium">
                                            {currentHistoryItems.length > 0 ? (
                                                currentHistoryItems.map((entry, index) => {
                                                    const verdictLower = entry.verdict.toLowerCase();
                                                    const isApproved = verdictLower.includes('aprovado');
                                                    const isReproved = verdictLower.includes('reprovado');
                                                    const isActivity = entry.className.toLowerCase().includes('administração') && entry.type.toLowerCase().includes('atividade');

                                                    // Definição das cores baseada no status do aluno
                                                    const studentColorClass = isApproved 
                                                        ? 'text-green-600 dark:text-green-400 font-bold' 
                                                        : isReproved 
                                                            ? 'text-red-600 dark:text-red-400 font-bold' 
                                                            : 'text-slate-600 dark:text-slate-400';

                                                    // Extração segura de Data/Hora (Coluna A e Coluna B)
                                                    const startParts = entry.startDateTime.split(' ');
                                                    const startDate = startParts[0] || '-';
                                                    const startTimeStr = startParts[1] || '-';
                                                    const endTimeStr = entry.endTimeOnly || '-';

                                                    return (
                                                        <tr key={index} className="group hover:bg-slate-50 dark:hover:bg-brand/5 transition-colors border-b border-slate-100 dark:border-white/5 last:border-0">
                                                            <td className="px-4 py-3 text-slate-500 dark:text-slate-400 whitespace-nowrap font-mono text-[10px]">
                                                                <div className="flex flex-col gap-0.5">
                                                                    <div className="flex items-center gap-1.5"><CalendarDays size={10} className="text-brand dark:text-brand-light" />{startDate}</div>
                                                                    <div className="flex items-center gap-1.5 opacity-70"><Clock size={10} />Início: {startTimeStr}</div>
                                                                    <div className="flex items-center gap-1.5 opacity-70"><Clock size={10} />Fim: {endTimeStr}</div>
                                                                </div>
                                                            </td>
                                                            <td className="px-4 py-3 text-slate-800 dark:text-slate-200">
                                                                <div className="flex flex-col items-start">
                                                                    <span className="font-bold font-condensed uppercase tracking-wide text-xs group-hover:text-brand dark:group-hover:text-brand-light transition-colors">{entry.className}</span>
                                                                    {isActivity && (<span className="text-[10px] text-brand flex items-center gap-1 mt-0.5"><FileCheck size={10} /> Atividade</span>)}
                                                                </div>
                                                            </td>
                                                            <td className="px-4 py-3 text-slate-600 dark:text-slate-300 font-condensed uppercase text-[11px] font-bold">{entry.professor}</td>
                                                            <td className={`px-4 py-3 max-w-[200px] truncate text-[11px] transition-colors ${studentColorClass}`} title={entry.students}>{entry.students}</td>
                                                        </tr>
                                                    );
                                                })
                                            ) : (
                                                <tr>
                                                    <td colSpan={4} className="px-4 py-16 text-center text-slate-400 uppercase font-condensed tracking-widest text-[10px]">Nenhum registro encontrado.</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                                
                                {/* Controles de Paginação (Histórico) */}
                                {totalHistoryPages > 1 && (
                                    <div className="flex items-center justify-between px-4 py-3 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#121a14]">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                                            Página {currentPage} de {totalHistoryPages}
                                        </span>
                                        <div className="flex items-center gap-2">
                                            <button 
                                                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                                disabled={currentPage === 1}
                                                className="p-1.5 rounded-sm bg-white dark:bg-dark-element border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:text-brand hover:border-brand disabled:opacity-50 disabled:hover:text-slate-500 disabled:hover:border-slate-200 transition-colors"
                                            >
                                                <ChevronLeft size={14} />
                                            </button>
                                            <button 
                                                onClick={() => setCurrentPage(p => Math.min(totalHistoryPages, p + 1))}
                                                disabled={currentPage === totalHistoryPages}
                                                className="p-1.5 rounded-sm bg-white dark:bg-dark-element border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:text-brand hover:border-brand disabled:opacity-50 disabled:hover:text-slate-500 disabled:hover:border-slate-200 transition-colors"
                                            >
                                                <ChevronRight size={14} />
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </>
                    )}

                    {viewMode === 'ranking' && (
                        <div className="bg-white dark:bg-[#0c120e] border border-slate-200 dark:border-brand/20 shadow-[0_0_15px_rgba(0,0,0,0.05)] dark:shadow-[0_0_15px_rgba(46,92,24,0.1)] rounded-sm overflow-hidden">
                            <div className="overflow-x-auto relative">
                                <table className="w-full text-left border-collapse">
                                    <thead className="bg-slate-50 dark:bg-[#121a14] border-b border-brand/20 dark:border-brand/30">
                                        <tr className="text-[10px] uppercase tracking-widest text-brand dark:text-brand-light font-condensed font-bold">
                                            {ranking.headers.length > 0 ? (
                                                ranking.headers.map((header, idx) => (
                                                    <th key={idx} className="px-4 py-3 whitespace-nowrap">{header}</th>
                                                ))
                                            ) : (
                                                <th className="px-4 py-3">Carregando...</th>
                                            )}
                                        </tr>
                                    </thead>
                                    <tbody className="text-xs font-medium">
                                        {currentRankingItems.length > 0 ? (
                                            currentRankingItems.map((row, idx) => {
                                                const isCurrentUserRow = currentUser && row.some(cell => typeof cell === 'string' && cell.trim().toLowerCase() === currentUser.nickname.trim().toLowerCase());
                                                return (
                                                    <tr key={idx} className={`group transition-colors border-b border-slate-100 dark:border-white/5 last:border-0 ${isCurrentUserRow ? 'bg-green-50 dark:bg-green-900/10 hover:bg-green-100 dark:hover:bg-green-900/20' : 'hover:bg-slate-50 dark:hover:bg-brand/5'}`}>
                                                        {row.map((cell, cIdx) => {
                                                            const isNameCell = typeof cell === 'string' && currentUser && cell.trim().toLowerCase() === currentUser.nickname.trim().toLowerCase();
                                                            return (
                                                                <td key={cIdx} className={`px-4 py-3 font-medium ${isCurrentUserRow ? 'text-green-800 dark:text-green-300' : 'text-slate-600 dark:text-slate-300'}`}>
                                                                    <div className="flex items-center gap-1.5">
                                                                        {cell}
                                                                        {isNameCell && <span className="text-[9px] font-bold uppercase tracking-widest text-green-700 dark:text-green-300 bg-green-500/20 px-1.5 py-0.5 rounded-sm select-none">(eu)</span>}
                                                                    </div>
                                                                </td>
                                                            )
                                                        })}
                                                    </tr>
                                                )
                                            })
                                        ) : (
                                            <tr>
                                                <td colSpan={7} className="px-4 py-16 text-center text-slate-400 uppercase font-condensed tracking-widest text-[10px]">Nenhum dado de ranking disponível.</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                            
                            {/* Controles de Paginação (Ranking) */}
                            {totalRankingPages > 1 && (
                                <div className="flex items-center justify-between px-4 py-3 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#121a14]">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                                        Página {currentPage} de {totalRankingPages}
                                    </span>
                                    <div className="flex items-center gap-2">
                                        <button 
                                            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                            disabled={currentPage === 1}
                                            className="p-1.5 rounded-sm bg-white dark:bg-dark-element border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:text-brand hover:border-brand disabled:opacity-50 disabled:hover:text-slate-500 disabled:hover:border-slate-200 transition-colors"
                                        >
                                            <ChevronLeft size={14} />
                                        </button>
                                        <button 
                                            onClick={() => setCurrentPage(p => Math.min(totalRankingPages, p + 1))}
                                            disabled={currentPage === totalRankingPages}
                                            className="p-1.5 rounded-sm bg-white dark:bg-dark-element border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:text-brand hover:border-brand disabled:opacity-50 disabled:hover:text-slate-500 disabled:hover:border-slate-200 transition-colors"
                                        >
                                            <ChevronRight size={14} />
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            );
        };

        const MENU_ITEMS = [
            { id: 'classes', label: 'Aulas e Scripts', icon: CustomCourseIcon },
            { id: 'history', label: 'Relatório de Aulas', icon: CustomHistoryIcon },
            { id: 'manual_prof', label: 'Manual do Professor', icon: CustomProfessorIcon },
        ];

        const MobileMenu = ({ menuItems, currentUser, currentView, navigateTo, onClose }) => {
            return (
                <div className="fixed inset-0 z-[1000] lg:hidden">
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
                    <div className="absolute left-0 top-0 bottom-0 w-72 bg-white dark:bg-dark-surface flex flex-col animate-fade-in shadow-2xl border-r-4 border-brand">
                        <div className="h-16 flex items-center justify-between px-5 shrink-0 border-b border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-dark-element">
                            <div className="flex items-center gap-3">
                                <img src={LOGO_URL} alt="Logo" className="h-8 w-auto object-contain" />
                                <div className="flex flex-col leading-none">
                                    <span className="font-condensed font-bold uppercase text-brand text-lg tracking-tighter">Menu</span>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Navegação</span>
                                </div>
                            </div>
                            <button onClick={onClose} className="p-1.5 bg-white dark:bg-dark-surface border border-slate-200 dark:border-white/10 rounded-sm">
                                <X size={20} className="text-slate-500" />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
                            <button
                                onClick={() => { navigateTo('home'); onClose(); }}
                                className={`flex items-center w-full px-5 py-4 rounded-sm transition-all font-condensed font-bold uppercase tracking-wide text-sm ${currentView === 'home' ? 'bg-brand text-white shadow-md' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-dark-hover border border-transparent'}`}
                            >
                                <CustomHomeIcon size={18} className={currentView === 'home' ? '' : 'opacity-70 grayscale'} />
                                <span className="ml-4">Início</span>
                            </button>

                            <div className="h-px bg-slate-100 dark:bg-white/5 my-4 mx-2"></div>

                            {menuItems.map(item => (
                                <button
                                    key={item.id}
                                    onClick={() => { navigateTo(item.id); onClose(); }}
                                    className={`flex items-center w-full px-4 py-3 rounded-sm text-sm font-condensed font-bold uppercase tracking-wide transition-all ${currentView === item.id ? 'bg-white dark:bg-dark-surface text-brand shadow-sm border-l-4 border-brand' : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-white dark:hover:bg-dark-surface'}`}
                                >
                                    <span className="ml-3">{item.label}</span>
                                </button>
                            ))}
                        </div>

                        <div className="p-6 border-t border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-dark-element">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white dark:bg-dark-surface border border-slate-200 dark:border-slate-700 rounded-sm overflow-hidden flex items-center justify-center">
                                    <img src={`https://www.habbo.com.br/habbo-imaging/avatarimage?user=${encodeURIComponent(currentUser?.nickname || '')}&direction=3&head_direction=3&gesture=sml&size=m&headonly=1`} alt="Avatar" className="scale-110" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-condensed font-bold uppercase text-sm text-slate-900 dark:text-white leading-none">{currentUser?.nickname}</span>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand mt-1">{currentUser?.role}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        };

        // --- AUTH SCREEN COMPONENT ---
        const AuthScreen = ({ onLoginSuccess, initialLoading }) => {
            const [mode, setMode] = useState('login'); // 'login', 'register', 'reset'
            const [nickname, setNickname] = useState('');
            const [password, setPassword] = useState('');
            const [confirmPassword, setConfirmPassword] = useState('');
            const [rememberMe, setRememberMe] = useState(false);
            
            const [authList, setAuthList] = useState([]);
            const [isLoading, setIsLoading] = useState(true); // Loading auth list
            const [isProcessing, setIsProcessing] = useState(false);
            const [errorMsg, setErrorMsg] = useState('');
            const [successMsg, setSuccessMsg] = useState('');
            
            const [validationCode, setValidationCode] = useState('');
            const [previewData, setPreviewData] = useState({ exists: false, role: '...' });
            
            // Password Policy
            const isValidPassword = (pwd) => /^(?=.*[^a-zA-Z0-9]).{9,}$/.test(pwd);

            useEffect(() => {
                // Fetch valid users from AUTH_GID
                const loadAuth = async () => {
                    try {
                        const rows = await fetchCSV(AUTH_GID);
                        const list = [];
                        rows.forEach(r => {
                            // Extrai o nickname da coluna 2 (índice 1) - Nickname do Fórum/Atual
                            if (r.length >= 2 && r[1] && r[1].trim() !== '') {
                                list.push({ 
                                    nickname: r[1].toLowerCase().trim(), 
                                    originalNick: r[1].trim(), 
                                    role: r[0] || 'Membro Especial' 
                                });
                            }
                            // Extrai o nickname da coluna 4 (índice 3) - Conta alternativa/Nick Habbo
                            if (r.length >= 4 && r[3] && r[3].trim() !== '') {
                                list.push({ 
                                    nickname: r[3].toLowerCase().trim(), 
                                    originalNick: r[3].trim(), 
                                    role: r[2] || 'Membro Especial' 
                                });
                            }
                        });
                        setAuthList(list);
                    } catch(e) {
                        setErrorMsg('Falha ao conectar ao servidor do CFO.');
                    } finally {
                        setIsLoading(false);
                    }
                };
                loadAuth();
            }, []);

            useEffect(() => {
                // Preview Logic
                const timer = setTimeout(() => {
                    if (nickname.trim().length > 2) {
                        const userMatch = authList.find(u => u.nickname === nickname.toLowerCase().trim());
                        if (userMatch) {
                            setPreviewData({ exists: true, role: userMatch.role });
                        } else {
                            setPreviewData({ exists: false, role: 'NÃO AUTORIZADO' });
                        }
                    } else {
                        setPreviewData({ exists: false, role: '...' });
                    }
                }, 400);
                return () => clearTimeout(timer);
            }, [nickname, authList]);

            useEffect(() => {
                // Generate validation code on mount for register/reset
                if (mode !== 'login') {
                    setValidationCode(`CFO-${Math.floor(1000 + Math.random() * 9000)}`);
                    setPassword('');
                    setConfirmPassword('');
                    setErrorMsg('');
                    setSuccessMsg('');
                } else {
                    setPassword('');
                    setErrorMsg('');
                    setSuccessMsg('');
                }
            }, [mode]);

            const copyCode = () => {
                navigator.clipboard.writeText(validationCode);
                setSuccessMsg('Código copiado!');
                setTimeout(() => setSuccessMsg(''), 2000);
            };

            const handleAction = async () => {
                setErrorMsg('');
                setSuccessMsg('');
                
                if (!nickname.trim() || !password) return setErrorMsg('Preencha os dados.');
                
                const lowerNick = nickname.toLowerCase().trim();
                const userMatch = authList.find(u => u.nickname === lowerNick);
                
                if (!userMatch) {
                    return setErrorMsg('Acesso negado. Nickname não listado no CFO.');
                }

                setIsProcessing(true);

                try {
                    if (!window.firebaseDB) {
                        setIsProcessing(false);
                        return setErrorMsg('Erro interno: Conexão com banco de dados não estabelecida.');
                    }

                    // Acessa o documento com base no nome do usuário em minúsculo na coleção cfo_passwords
                    const userRef = window.firebaseDoc(window.firebaseDB, "cfo_passwords", lowerNick);

                    if (mode === 'login') {
                        const userSnap = await window.firebaseGetDoc(userRef);
                        
                        if (!userSnap.exists() || userSnap.data().password !== password) {
                            setIsProcessing(false);
                            return setErrorMsg('Credenciais incorretas ou usuário não cadastrado.');
                        }
                        
                        // Success Login
                        onLoginSuccess({ nickname: userMatch.originalNick || userMatch.nickname, role: userMatch.role }, rememberMe);
                        return;
                    } 
                    
                    else if (mode === 'register' || mode === 'reset') {
                        const userSnap = await window.firebaseGetDoc(userRef);

                        // SEGURANÇA: Impede registro se a conta já existir no Firestore
                        if (mode === 'register' && userSnap.exists()) {
                            setIsProcessing(false);
                            return setErrorMsg('Usuário já registrado! Faça login ou redefina sua senha.');
                        }

                        // SEGURANÇA: Impede redefinição de senha se a conta não estiver registrada
                        if (mode === 'reset' && !userSnap.exists()) {
                            setIsProcessing(false);
                            return setErrorMsg('Usuário não registrado! Crie uma conta primeiro.');
                        }

                        if (password !== confirmPassword) {
                            setIsProcessing(false);
                            return setErrorMsg('As senhas não coincidem.');
                        }
                        if (!isValidPassword(password)) {
                            setIsProcessing(false);
                            return setErrorMsg('A senha deve ter mais de 8 caracteres e conter símbolos.');
                        }

                        const profile = await fetchHabboProfile(userMatch.originalNick || nickname.trim());
                        
                        if (!profile) {
                            setIsProcessing(false);
                            return setErrorMsg('Falha ao acessar API Habbo. Verifique se seu perfil está público.');
                        }
                        
                        if (profile.motto !== validationCode) {
                            setIsProcessing(false);
                            return setErrorMsg('O código na sua missão não corresponde ao gerado.');
                        }

                        // Success Registration / Reset: Save password and metadata to Firestore
                        await window.firebaseSetDoc(userRef, {
                            password: password,
                            originalNick: userMatch.originalNick || userMatch.nickname,
                            role: userMatch.role,
                            updatedAt: new Date().toISOString()
                        });
                        
                        if (mode === 'register') {
                            onLoginSuccess({ nickname: userMatch.originalNick || userMatch.nickname, role: userMatch.role }, rememberMe);
                        } else {
                            setSuccessMsg('Senha redefinida com sucesso!');
                            setMode('login');
                        }
                    }

                } catch(e) {
                    console.error(e);
                    setErrorMsg('Ocorreu um erro interno. Verifique a conexão.');
                } finally {
                    setIsProcessing(false);
                }
            };

            if (isLoading || initialLoading) {
                return (
                    <div className="flex min-h-screen w-full bg-[#f4f6f5] items-center justify-center">
                         <div className="flex flex-col items-center">
                             <Loader2 size={40} className="animate-spin text-brand mb-4" />
                             <p className="text-sm font-bold text-brand uppercase tracking-widest font-condensed">Conectando...</p>
                         </div>
                    </div>
                );
            }

            return (
                <div className="flex min-h-screen w-full bg-[#e8ebe9] items-center justify-center p-4">
                    
                    {/* Notificações Flutuantes (Canto Superior Direito) */}
                    <div className="fixed top-6 right-6 z-[9999] flex flex-col gap-3 pointer-events-none">
                        {errorMsg && (
                            <div className="pointer-events-auto bg-white text-slate-800 px-5 py-4 rounded shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-start gap-4 border-l-4 border-red-500 animate-slide-in w-72 md:w-80">
                                <AlertTriangle size={20} className="text-red-500 shrink-0 mt-0.5" />
                                <div className="flex-1 min-w-0">
                                    <h4 className="text-[10px] font-bold uppercase tracking-widest mb-1 text-red-600">Erro</h4>
                                    <p className="text-xs font-medium leading-relaxed">{errorMsg}</p>
                                </div>
                                <button onClick={() => setErrorMsg('')} className="shrink-0 text-slate-400 hover:text-slate-600 transition-colors"><X size={14}/></button>
                            </div>
                        )}
                        {successMsg && (
                            <div className="pointer-events-auto bg-white text-slate-800 px-5 py-4 rounded shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-start gap-4 border-l-4 border-green-500 animate-slide-in w-72 md:w-80">
                                <CheckCircle2 size={20} className="text-green-500 shrink-0 mt-0.5" />
                                <div className="flex-1 min-w-0">
                                    <h4 className="text-[10px] font-bold uppercase tracking-widest mb-1 text-green-600">Sucesso</h4>
                                    <p className="text-xs font-medium leading-relaxed">{successMsg}</p>
                                </div>
                                <button onClick={() => setSuccessMsg('')} className="shrink-0 text-slate-400 hover:text-slate-600 transition-colors"><X size={14}/></button>
                            </div>
                        )}
                    </div>

                    {/* Formulário com Transição Suave e Sem Scrollbar */}
                    <div className={`flex flex-col lg:flex-row w-full max-w-[850px] bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 ease-in-out ${mode === 'login' ? 'min-h-[500px] lg:h-[500px]' : 'min-h-[550px] lg:h-[550px]'}`}>
                        
                        {/* Left Side: Form */}
                        <div className="flex-1 p-6 lg:p-10 flex flex-col justify-center relative h-full">

                            <div className="w-full max-w-sm mx-auto lg:mx-0">
                                <div className="mb-4 flex justify-center lg:justify-start">
                                    <img src={LOGO_URL} alt="CFO" className="h-8 w-auto" />
                                </div>
                                
                                <h1 className="text-2xl lg:text-3xl font-black text-slate-900 mb-1 font-poppins tracking-tight text-center lg:text-left">
                                    {mode === 'login' ? 'CFO Class' : mode === 'register' ? 'Criar uma conta' : 'Redefinir Senha'}
                                </h1>
                                <p className="text-xs text-slate-500 mb-6 text-center lg:text-left">
                                    {mode === 'login' ? 'Insira suas credenciais para acessar.' : 
                                     'Preencha os dados e valide a sua missão para prosseguir.'}
                                </p>

                                <div className="space-y-3">
                                    <div>
                                        <label className="block text-[10px] font-bold text-slate-600 uppercase tracking-widest mb-1">NICKNAME (HABBO)</label>
                                        <input 
                                            type="text" 
                                            value={nickname} 
                                            onChange={(e) => setNickname(e.target.value)}
                                            className="w-full h-10 px-4 bg-slate-50 text-slate-900 border border-slate-200 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all"
                                            placeholder="Seu nickname..."
                                        />
                                    </div>
                                    
                                    <div className={`grid gap-3 ${mode !== 'login' ? 'grid-cols-2' : 'grid-cols-1'}`}>
                                        <div>
                                            <label className="block text-[10px] font-bold text-slate-600 uppercase tracking-widest mb-1">SENHA</label>
                                            <input 
                                                type="password" 
                                                value={password} 
                                                onChange={(e) => setPassword(e.target.value)}
                                                className="w-full h-10 px-4 bg-slate-50 text-slate-900 border border-slate-200 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all"
                                                placeholder="••••••"
                                            />
                                        </div>
                                        {mode !== 'login' && (
                                            <div>
                                                <label className="block text-[10px] font-bold text-slate-600 uppercase tracking-widest mb-1">CONFIRMAR</label>
                                                <input 
                                                    type="password" 
                                                    value={confirmPassword} 
                                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                                    className="w-full h-10 px-4 bg-slate-50 text-slate-900 border border-slate-200 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all"
                                                    placeholder="••••••"
                                                />
                                            </div>
                                        )}
                                    </div>

                                    {mode !== 'login' && (
                                        <div className="mt-2 p-3 bg-slate-50 border border-slate-200 rounded-xl">
                                            <label className="block text-[10px] font-bold text-slate-600 uppercase tracking-widest mb-2">CÓDIGO DE VALIDAÇÃO (MISSÃO)</label>
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="flex-1 h-10 bg-white border border-slate-200 rounded-md flex items-center px-4 font-mono font-bold text-slate-800 text-sm">
                                                    {validationCode}
                                                </div>
                                                <button onClick={copyCode} className="h-10 w-10 bg-white border border-slate-200 rounded-md flex items-center justify-center text-slate-500 hover:text-brand transition-colors">
                                                    <Copy size={16} />
                                                </button>
                                            </div>
                                            <p className="text-[10px] text-slate-500 leading-tight">Cole este código na sua <strong>missão</strong> do Habbo Hotel antes de concluir o registro.</p>
                                        </div>
                                    )}

                                    {mode === 'login' && (
                                        <div className="flex items-center justify-between pt-1">
                                            <label className="flex items-center gap-2 cursor-pointer group">
                                                <input type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} className="accent-brand w-3.5 h-3.5 cursor-pointer" />
                                                <span className="text-xs font-bold text-slate-500 group-hover:text-slate-800 transition-colors">Manter logado</span>
                                            </label>
                                            <button onClick={() => setMode('reset')} className="text-xs font-bold text-slate-400 hover:text-brand transition-colors">Esqueceu a senha?</button>
                                        </div>
                                    )}

                                    <button 
                                        onClick={handleAction}
                                        disabled={isProcessing}
                                        className="w-full h-10 mt-4 bg-[#4e5c46] hover:bg-[#3d4a35] text-white font-bold text-sm rounded-lg transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shrink-0"
                                    >
                                        {isProcessing ? <Loader2 size={16} className="animate-spin" /> : null}
                                        {mode === 'login' ? 'Entrar' : mode === 'register' ? 'Concluir' : 'Redefinir Senha'}
                                    </button>

                                    <div className="mt-4 text-center">
                                        {mode === 'login' ? (
                                            <button onClick={() => setMode('register')} className="text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-brand transition-colors">
                                                NÃO POSSUI CONTA? REGISTRE-SE
                                            </button>
                                        ) : (
                                            <button onClick={() => setMode('login')} className="text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-brand transition-colors">
                                                VOLTAR PARA O LOGIN
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Preview Panel */}
                        <div className="hidden lg:flex w-[350px] m-2 rounded-xl bg-[#1a231d] relative overflow-hidden flex-col items-center justify-center shrink-0">
                            {/* Watermark Logo */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-[0.05] pointer-events-none mix-blend-overlay">
                                <img src={LOGO_URL} className="w-[80%] h-auto grayscale object-contain" />
                            </div>

                            <div className="relative z-10 flex flex-col items-center">
                                <div className="w-28 h-28 rounded-full border-4 border-[#2b3a30] bg-black/20 flex items-center justify-center overflow-hidden mb-5 shadow-2xl relative">
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 z-0"></div>
                                    
                                    {/* Exibe o Avatar somente se a conta for encontrada na planilha */}
                                    {previewData.exists ? (
                                        <img 
                                            src={`https://www.habbo.com.br/habbo-imaging/avatarimage?user=${encodeURIComponent(nickname)}&direction=3&head_direction=3&gesture=sml&size=l`} 
                                            alt="Avatar" 
                                            className="transition-opacity duration-300 opacity-100 scale-[1.2] mt-4 relative z-10"
                                        />
                                    ) : (
                                        <span className="text-5xl text-white/30 font-bold font-display relative z-10 drop-shadow-md pb-1 select-none">?</span>
                                    )}
                                </div>
                                
                                <div className="bg-[#141b16]/80 backdrop-blur-sm px-5 py-3 rounded-lg border border-[#2b3a30] text-center min-w-[180px] shadow-lg">
                                    <h3 className="text-white font-bold text-base mb-1">{previewData.exists && nickname ? `@${nickname.toLowerCase()}` : '@usuario'}</h3>
                                    <p className={`text-[8px] font-black uppercase tracking-[0.2em] font-mono ${previewData.exists ? 'text-[#8ba888]' : 'text-slate-500'}`}>
                                        {previewData.role}
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            );
        };

        const App = () => {
            const [isLoggedIn, setIsLoggedIn] = useState(false);
            const [currentUser, setCurrentUser] = useState(null);
            const [initialLoading, setInitialLoading] = useState(true);
            const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

            const secureUserRef = useRef(null);

            // ... (Other states)
            const [currentView, setCurrentView] = useState('home');
            const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
            const [selectedClass, setSelectedClass] = useState(null);
            const [classContent, setClassContent] = useState([]);
            const [contentLoading, setContentLoading] = useState(false);
            const [classStartTime, setClassStartTime] = useState(null);
            const [showWarning, setShowWarning] = useState(false);
            const [manualContent, setManualContent] = useState([]);
            const [textZoom, setTextZoom] = useState(0);
            const [toasts, setToasts] = useState([]);
            const warningCooldownRef = useRef(false);

            const addToast = (type, title, message) => {
                const id = Math.random().toString(36).substr(2, 9);
                setToasts(prev => [...prev, { id, type, title, message }]);
                setTimeout(() => removeToast(id), 5000);
            };

            const removeToast = (id) => {
                setToasts(prev => prev.filter(t => t.id !== id));
            };

            useEffect(() => {
                const root = document.documentElement;
                if (theme === 'dark') root.classList.add('dark'); else root.classList.remove('dark');
                localStorage.setItem('theme', theme);
            }, [theme]);

            // STARTUP AUTH CHECK
            useEffect(() => {
                const checkSession = async () => {
                    const sessionData = localStorage.getItem('cfo_session');
                    if (!sessionData) {
                        setInitialLoading(false);
                        return;
                    }

                    try {
                        const parsedUser = JSON.parse(sessionData);
                        // Security: Check if user is STILL in AUTH_GID
                        const rows = await fetchCSV(AUTH_GID);
                        let isValid = false;
                        let updatedRole = parsedUser.role;

                        for (const row of rows) {
                            const n1 = (row[1] || '').toLowerCase().trim();
                            const n2 = (row[3] || '').toLowerCase().trim();
                            const u = parsedUser.nickname.toLowerCase().trim();
                            
                            if (n1 === u || n2 === u) {
                                isValid = true;
                                updatedRole = n2 === u ? (row[2] || 'Membro Especial') : row[0];
                                break;
                            }
                        }

                        if (isValid) {
                            const validUser = { ...parsedUser, role: updatedRole };
                            setCurrentUser(validUser);
                            secureUserRef.current = validUser;
                            setIsLoggedIn(true);
                        } else {
                            // User removed from GID or invalid
                            localStorage.removeItem('cfo_session');
                        }
                    } catch (e) {
                        console.error("Session check error", e);
                        localStorage.removeItem('cfo_session');
                    } finally {
                        setInitialLoading(false);
                    }
                };

                checkSession();
            }, []);

            const handleLoginSuccess = (user, remember) => {
                setCurrentUser(user);
                secureUserRef.current = user;
                setIsLoggedIn(true);
                if (remember) {
                    localStorage.setItem('cfo_session', JSON.stringify(user));
                } else {
                    // Se não for para manter logado, podemos salvar apenas em memória e usar sessionStorage se recarregar a page
                    sessionStorage.setItem('cfo_temp_session', JSON.stringify(user)); 
                }
            };

            const handleLogout = () => {
                localStorage.removeItem('cfo_session');
                sessionStorage.removeItem('cfo_temp_session');
                setIsLoggedIn(false);
                setCurrentUser(null);
                secureUserRef.current = null;
            };

            // HASH NAVIGATION HANDLER
            useEffect(() => {
                const handleHashChange = () => {
                    const hash = window.location.hash.replace('#', '');
                    if (hash === 'classes') setCurrentView('classes');
                    if (hash === 'history') setCurrentView('history');
                    if (hash === 'manual') setCurrentView('manual_prof');
                };

                window.addEventListener('hashchange', handleHashChange);
                handleHashChange();
                return () => window.removeEventListener('hashchange', handleHashChange);
            }, []);

            useEffect(() => {
                if (currentView) {
                    const viewToId = { 'classes': 'classes', 'history': 'history', 'manual_prof': 'manual' };
                    const id = viewToId[currentView];
                    if (id && window.location.hash === `#${id}`) {
                        setTimeout(() => {
                            const el = document.getElementById(id);
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }, 100);
                    }
                }
            }, [currentView]);

            useEffect(() => {
                let gid = null;
                if (currentView === 'manual_prof') gid = MANUAL_PROF_GID;

                if (gid) {
                    const load = async () => {
                        setContentLoading(true);
                        setManualContent([]);
                        try {
                            const rows = await fetchClassContent(gid);
                            setManualContent(parseRowsToBlocks(rows));
                        } catch (e) { console.error(e); }
                        finally { setContentLoading(false); }
                    };
                    load();
                }
            }, [currentView]);

            const openClass = async (cls) => {
                setSelectedClass(cls);
                setCurrentView('classes');
                setClassStartTime(new Date());
                setContentLoading(true);
                try {
                    const [classRows, initRows] = await Promise.all([
                        fetchClassContent(cls.gid),
                        fetchCSV(INIT_PROC_GID)
                    ]);

                    const mainBlocks = parseRowsToBlocks(classRows);

                    const initBlocks = initRows
                        .filter(r => r[0])
                        .map(r => ({
                            id: generateId(),
                            type: 'leaf',
                            tag: 'att1',
                            content: r[0],
                            extra: ''
                        }));

                    if (initBlocks.length > 0) {
                        initBlocks.unshift({ id: generateId(), type: 'leaf', tag: 'mst', content: 'Procedimentos Iniciais', extra: '' });
                    }

                    setClassContent([...initBlocks, ...mainBlocks]);
                } catch (err) {
                    console.error(err);
                    alert('Erro ao carregar.');
                } finally {
                    setContentLoading(false);
                }
            };

            const triggerWarning = useCallback(() => {
                if (warningCooldownRef.current) return;
                setShowWarning(true);
                setTimeout(() => { setShowWarning(false); }, 5000);
            }, []);

            const dismissWarning = () => {
                setShowWarning(false);
                warningCooldownRef.current = true;
                setTimeout(() => { warningCooldownRef.current = false; }, 5000);
            };

            const Toast = ({ message, onClose }) => (
                <div className="fixed top-24 right-4 z-[9999] bg-red-800 text-white px-6 py-4 rounded shadow-2xl animate-slide-in-right flex items-center gap-4 max-w-sm border-l-4 border-yellow-500">
                    <div className="bg-white/10 p-2 rounded-full shrink-0"><AlertTriangle size={20} className="text-yellow-500" /></div>
                    <div className="flex flex-col"><span className="text-xs font-bold uppercase text-yellow-500 tracking-wider">Atenção</span><p className="font-bold text-sm leading-snug">{message}</p></div>
                    <button onClick={onClose} className="p-1 hover:bg-white/10 rounded transition-colors ml-auto"><X size={16} /></button>
                </div>
            );

            const Footer = () => (
                <footer className="mt-auto bg-[#050806] border-t-2 border-brand/20 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(45deg, #2e5c18 25%, transparent 25%, transparent 50%, #2e5c18 50%, #2e5c18 75%, transparent 75%, transparent)', backgroundSize: '60px 60px' }}></div>

                    <div className="max-w-[1400px] mx-auto px-6 py-10 md:py-12 relative z-10">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                            <div className="flex items-start gap-5 group">
                                <div className="relative p-2 bg-white/5 rounded-sm border border-white/10 group-hover:border-brand/50 transition-colors">
                                    <img src={LOGO_URL} alt="CFO" className="h-10 w-auto grayscale group-hover:grayscale-0 transition-all duration-500" />
                                    <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-white/20"></div>
                                    <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-white/20"></div>
                                </div>
                                <div className="flex flex-col space-y-1">
                                    <span className="font-condensed font-bold text-white uppercase tracking-widest text-sm leading-none">Centro de Formação de Oficiais</span>
                                    <span className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-mono">Polícia Militar Revolução Contra o Crime • PMRCC</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-6">
                                <span className="text-[10px] text-white/30 font-mono">© {new Date().getFullYear()} DIREITOS RESERVADOS À SUBCOMPANHIA</span>
                                <span className="text-brand font-bold uppercase tracking-widest text-[10px] hidden md:inline">DESENVOLVIDO POR .BRENDON</span>
                            </div>
                        </div>
                    </div>
                </footer>
            );

            const quickAccessConfig = useMemo(() => {
                return {
                    card1: {
                        id: 'classes',
                        title: 'Scripts',
                        desc: 'Clique aqui para acessar os scripts.',
                        iconImg: 'https://i.imgur.com/N03iLnL.png',
                        iconLucide: null,
                        color: 'bg-brand',
                        bgHover: 'group-hover:text-brand',
                        borderHover: 'hover:border-brand/60'
                    },
                    card2: {
                        id: 'manual_prof',
                        title: 'Manual do Professor',
                        desc: 'Normas e prazos de aplicação.',
                        iconImg: 'https://i.imgur.com/85pC8ek.png',
                        iconLucide: null,
                        color: 'bg-slate-400',
                        bgHover: 'group-hover:text-slate-700',
                        borderHover: 'hover:border-slate-300'
                    }
                };
            }, []);

            if (!isLoggedIn) {
                return <AuthScreen onLoginSuccess={handleLoginSuccess} initialLoading={initialLoading} />;
            }

            return (
                <div className="flex flex-col min-h-screen w-full font-sans text-slate-800 dark:text-slate-200">
                    {showWarning && <Toast message="Pulo de linhas detectado!" onClose={dismissWarning} />}

                    <ToastContainer toasts={toasts} removeToast={removeToast} />

                    <Navbar user={currentUser} onMenuClick={() => setMobileMenuOpen(true)} navigateTo={setCurrentView} currentView={currentView} menuItems={MENU_ITEMS} toggleTheme={() => setTheme(t => t === 'light' ? 'dark' : 'light')} theme={theme} onLogout={handleLogout} />

                    {mobileMenuOpen && (
                        <MobileMenu
                            menuItems={MENU_ITEMS}
                            currentUser={currentUser}
                            currentView={currentView}
                            navigateTo={setCurrentView}
                            onClose={() => setMobileMenuOpen(false)}
                        />
                    )}

                    <div className="flex-1 w-full max-w-[1400px] mx-auto p-0 md:p-2 lg:p-8 relative z-10">
                        <main className="paper-container min-h-[800px] p-4 lg:p-12 transition-colors duration-500 rounded-b-sm">

                            {currentView === 'home' && (
                                <div className="animate-fade-in space-y-12">
                                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-slate-200 dark:border-white/5 pb-8">
                                        <div>
                                            <h2 className="text-3xl md:text-5xl font-condensed font-bold text-slate-900 dark:text-white uppercase italic tracking-tight">Bem-vindo, {currentUser.nickname}</h2>
                                        </div>
                                    </div>

                                    <Slideshow />

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                                        {/* Card 1 - Dynamic */}
                                        <div onClick={() => setCurrentView(quickAccessConfig.card1.id)} className="relative bg-white dark:bg-dark-surface p-8 border border-slate-200 dark:border-white/5 shadow-folder cursor-pointer group overflow-hidden transition-all duration-300 hover:-translate-y-1 rounded-sm">
                                            <div className={`absolute top-0 left-0 w-1 h-full ${quickAccessConfig.card1.color} group-hover:w-2 transition-all`}></div>
                                            <div className="mb-8 flex justify-between items-start">
                                                <div className="p-3 bg-slate-100 dark:bg-dark-element rounded-sm group-hover:bg-slate-200 dark:group-hover:bg-white/10 transition-colors">
                                                    {quickAccessConfig.card1.iconImg ?
                                                        <img src={quickAccessConfig.card1.iconImg} className="w-8 h-8 object-contain mb-0" alt={quickAccessConfig.card1.title} />
                                                        :
                                                        React.createElement(quickAccessConfig.card1.iconLucide, { size: 32, className: "text-brand" })
                                                    }
                                                </div>
                                                <span className={`text-[10px] font-bold uppercase tracking-widest text-slate-300 ${quickAccessConfig.card1.bgHover} transition-colors`}>Acesso Rápido</span>
                                            </div>
                                            <h3 className={`text-2xl font-condensed font-bold uppercase tracking-wide mb-2 ${quickAccessConfig.card1.bgHover} transition-colors`}>{quickAccessConfig.card1.title}</h3>
                                            <p className="text-sm font-medium opacity-60 leading-relaxed">{quickAccessConfig.card1.desc}</p>
                                        </div>

                                        {/* Card 2 - Dynamic */}
                                        <div onClick={() => setCurrentView(quickAccessConfig.card2.id)} className="relative bg-white dark:bg-dark-surface p-8 border border-slate-200 dark:border-white/5 shadow-folder cursor-pointer group overflow-hidden transition-all duration-300 hover:-translate-y-1 rounded-sm">
                                            <div className={`absolute top-0 left-0 w-1 h-full ${quickAccessConfig.card2.color} group-hover:w-2 transition-all`}></div>
                                            <div className="mb-8 flex justify-between items-start">
                                                <div className="p-3 bg-slate-100 dark:bg-dark-element rounded-sm group-hover:bg-slate-800 transition-colors">
                                                    {quickAccessConfig.card2.iconImg ?
                                                        <img src={quickAccessConfig.card2.iconImg} className="w-8 h-8 object-contain mb-0" alt={quickAccessConfig.card2.title} />
                                                        :
                                                        React.createElement(quickAccessConfig.card2.iconLucide, { size: 32, className: "text-slate-500" })
                                                    }
                                                </div>
                                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300 group-hover:text-slate-500 transition-colors">Documentação</span>
                                            </div>
                                            <h3 className="text-2xl font-condensed font-bold uppercase tracking-wide mb-2 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">{quickAccessConfig.card2.title}</h3>
                                            <p className="text-sm font-medium opacity-60 leading-relaxed">{quickAccessConfig.card2.desc}</p>
                                        </div>

                                        <NoticeBoard />
                                    </div>
                                </div>
                            )}

                            {currentView === 'classes' && !selectedClass && (
                                <div id="classes" className="animate-fade-in space-y-10">
                                    <div className="border-b-2 border-slate-200 dark:border-white/5 pb-6 flex items-end justify-between">
                                        <div>
                                            <h2 className="text-3xl md:text-4xl font-condensed font-bold text-slate-900 dark:text-white uppercase tracking-tight italic">AULAS E SCRIPTS</h2>
                                            <p className="text-slate-500 font-medium mt-2 text-sm">Selecione o curso que deseja abaixo.</p>
                                        </div>
                                        <div className="hidden md:block">
                                            <span className="text-xs font-bold uppercase tracking-widest text-brand bg-brand/10 px-3 py-1 rounded-full">Módulo I</span>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 gap-6">
                                        {CLASSES.map((cls, idx) => (
                                            <div key={cls.id} onClick={() => openClass(cls)} className="group cursor-pointer">
                                                <div className="relative bg-white dark:bg-[#121813] border border-slate-200 dark:border-white/10 hover:border-brand/60 transition-all duration-300 rounded-sm overflow-hidden flex flex-col md:flex-row hover:shadow-lg">

                                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-slate-200 dark:bg-white/10 group-hover:bg-brand transition-colors"></div>

                                                    <div className="p-6 md:w-32 bg-slate-50 dark:bg-[#0a0f0b] border-r border-slate-100 dark:border-white/5 flex flex-col justify-center items-center md:items-start shrink-0">
                                                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 mb-1">Curso</span>
                                                        <span className="text-3xl font-display text-slate-300 dark:text-white/20 group-hover:text-brand transition-colors">0{idx + 1}</span>
                                                    </div>

                                                    <div className="p-6 flex-1 flex flex-col justify-center relative z-10">
                                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                                                            <h4 className="text-xl font-condensed font-bold uppercase tracking-wide text-slate-800 dark:text-white group-hover:text-brand transition-colors flex items-center gap-3">
                                                                <img src={cls.icon} alt="" className="w-8 h-8 object-contain drop-shadow-sm opacity-90 group-hover:opacity-100 transition-opacity" />
                                                                {cls.name}
                                                            </h4>
                                                        </div>
                                                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400 font-sans pl-3 border-l-2 border-slate-200 dark:border-white/10 group-hover:border-brand/30 transition-colors">
                                                            {cls.description}
                                                        </p>
                                                    </div>

                                                    <div className="p-6 md:w-48 bg-slate-50 dark:bg-[#0a0f0b]/50 flex items-center justify-end md:justify-center border-l border-slate-100 dark:border-white/5 group-hover:bg-brand group-hover:text-white transition-all duration-300">
                                                        <span className="font-condensed font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                                                            Acessar <ArrowRight size={16} />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {currentView === 'classes' && selectedClass && (
                                <div className="animate-fade-in">
                                    <div className="sticky top-14 lg:top-20 z-30 -mx-4 md:-mx-12 px-4 md:px-12 bg-slate-100/90 dark:bg-[#0c120e]/95 backdrop-blur-md border-y border-brand/30 mb-8 py-2 md:py-4 shadow-md transition-all">
                                        <div className="max-w-[1400px] mx-auto flex flex-row items-center justify-between gap-2 md:gap-4">
                                            <div className="flex items-center gap-2 md:gap-5 min-w-0">
                                                <button onClick={() => setSelectedClass(null)} className="shrink-0 group flex items-center justify-center w-8 h-8 md:w-12 md:h-12 bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-sm hover:bg-brand hover:border-brand hover:text-white transition-all duration-200 shadow-sm">
                                                    <ArrowLeft size={20} className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-0.5 transition-transform" />
                                                </button>
                                                <img src={selectedClass.icon} alt="" className="hidden sm:block w-8 h-8 md:w-12 md:h-12 object-contain drop-shadow-md shrink-0" />
                                                <div className="flex flex-col min-w-0">
                                                    <h2 className="text-base md:text-3xl font-condensed font-bold text-slate-900 dark:text-white uppercase tracking-tight leading-none drop-shadow-sm truncate">
                                                        {selectedClass.name}
                                                    </h2>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-2 md:gap-4 shrink-0">
                                                {/* BOTÃO POSTAR (Condicional se a URL estiver definida nas consts) */}
                                                {selectedClass.postUrl && (
                                                    <button 
                                                        onClick={() => window.open(selectedClass.postUrl, '_blank')}
                                                        className="flex items-center gap-2 px-3 py-2 md:px-4 bg-brand text-white rounded-sm font-bold uppercase tracking-widest text-[10px] md:text-xs hover:bg-brand-hover hover:-translate-y-0.5 transition-all shadow-md"
                                                        title="Postar Aula no Fórum"
                                                    >
                                                        <ExternalLink size={16} className="hidden sm:block" /> Postar
                                                    </button>
                                                )}

                                                <div className="hidden md:flex items-center bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-sm mr-2 shadow-sm">
                                                    <button
                                                        onClick={() => setTextZoom(Math.max(0, textZoom - 1))}
                                                        disabled={textZoom <= 0}
                                                        className="w-10 h-12 flex items-center justify-center text-slate-500 hover:text-brand hover:bg-slate-50 dark:hover:bg-white/10 disabled:opacity-30 disabled:hover:text-slate-500 transition-colors border-r border-slate-200 dark:border-white/5"
                                                        title="Diminuir Fonte"
                                                    >
                                                        <Minus size={16} />
                                                    </button>
                                                    <div className="px-3 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 select-none w-20">
                                                        <Type size={14} />
                                                        <span>{textZoom === 0 ? '100%' : textZoom === 1 ? '125%' : '150%'}</span>
                                                    </div>
                                                    <button
                                                        onClick={() => setTextZoom(Math.min(2, textZoom + 1))}
                                                        disabled={textZoom >= 2}
                                                        className="w-10 h-12 flex items-center justify-center text-slate-500 hover:text-brand hover:bg-slate-50 dark:hover:bg-white/10 disabled:opacity-30 disabled:hover:text-slate-500 transition-colors border-l border-slate-200 dark:border-white/5"
                                                        title="Aumentar Fonte"
                                                    >
                                                        <Plus size={16} />
                                                    </button>
                                                </div>
                                                <div className="hidden xl:flex flex-col items-end border-r border-slate-300 dark:border-white/10 pr-6 mr-2">
                                                    <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Professor(a)</span>
                                                    <span className="font-condensed font-bold text-sm text-slate-700 dark:text-slate-300 uppercase">{currentUser?.nickname}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-full mx-auto">
                                        {contentLoading ? (
                                            <div className="flex flex-col items-center justify-center py-32 bg-white dark:bg-dark-element border border-slate-200 dark:border-slate-700 shadow-sm rounded-sm">
                                                <Loader2 className="animate-spin text-brand mb-4" size={48} />
                                                <span className="font-condensed font-bold uppercase tracking-widest text-slate-400 text-sm">Descriptografando Script...</span>
                                            </div>
                                        ) : (
                                            <div className="relative min-h-[800px]">
                                                <div className="watermark"><img src={LOGO_URL} className="w-full h-auto grayscale opacity-10" /></div>

                                                <div className="relative z-10 space-y-2">
                                                    <ContentRenderer blocks={classContent} onSkipWarning={triggerWarning} currentUser={currentUser} textZoom={textZoom} />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                            {currentView === 'history' && <div id="history"><ClassHistoryList currentUser={currentUser} /></div>}

                            {currentView === 'manual_prof' && (
                                <div id="manual" className="animate-fade-in max-w-6xl mx-auto pb-16 pt-0 md:pt-6">
                                    {/* Premium Header Container */}
                                    <div className="relative bg-[#050806] rounded-t-3xl overflow-hidden shadow-[0_20px_80px_-15px_rgba(46,92,24,0.15)] border border-white/5 border-b-0 mb-0">
                                        {/* Cybernetic/Grid Background elements */}
                                        <div className="absolute inset-0 bg-[linear-gradient(rgba(46,92,24,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(46,92,24,0.05)_1px,transparent_1px)] bg-[size:30px_30px] opacity-40"></div>
                                        <div className="absolute inset-0 bg-gradient-to-br from-brand/20 via-[#050806]/90 to-[#050806] z-0"></div>
                                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4 z-0 pointer-events-none"></div>
                                        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-accent/5 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/4 z-0 pointer-events-none"></div>

                                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand to-transparent opacity-60 z-20"></div>

                                        {/* Abstract decorative icon background */}
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.02] transform -rotate-12 scale-[4] z-0 origin-right pointer-events-none mix-blend-screen">
                                            <Book size={200} />
                                        </div>

                                        <div className="relative z-10 px-5 py-10 md:p-20 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
                                            {/* Glassmorphic Icon Box */}
                                            <div className="relative group shrink-0">
                                                <div className="absolute inset-0 bg-brand blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 rounded-full"></div>
                                                <div className="relative w-24 h-24 md:w-40 md:h-40 bg-black/40 backdrop-blur-xl rounded-3xl border border-white/10 flex items-center justify-center shadow-2xl overflow-hidden group-hover:border-brand/40 transition-colors duration-500">
                                                    <div className="absolute inset-0 bg-gradient-to-tr from-brand/20 to-transparent opacity-50"></div>
                                                    <div className="relative z-10 p-2 mix-blend-screen opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-in-out">
                                                        <CustomProfessorIcon size={64} className="drop-shadow-2xl w-16 h-16 md:w-20 md:h-20" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="text-center md:text-left flex-1 flex flex-col justify-center pt-0 md:pt-4">
                                                <div className="flex items-center justify-center md:justify-start gap-4 mb-5">
                                                    <div className="flex items-center gap-2 px-4 py-1.5 bg-brand-light/10 border border-brand/30 text-brand-light rounded-sm text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm shadow-[0_0_20px_rgba(46,92,24,0.15)] select-none">
                                                        <ShieldCheck size={14} className="text-brand" /> CFO
                                                    </div>
                                                    <div className="h-4 w-px bg-white/20"></div>
                                                    <span className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-mono select-none">Documento Oficial</span>
                                                </div>

                                                <h2 className="text-3xl md:text-6xl font-display text-white tracking-wide drop-shadow-lg mb-4 leading-none uppercase relative inline-block">
                                                    Manual do Professor
                                                </h2>

                                                <p className="text-slate-300 font-poppins text-sm md:text-md max-w-3xl leading-relaxed mx-auto md:mx-0">
                                                    Manual destinado aos <strong className="text-white font-medium bg-brand/10 px-1">professores</strong> do Centro de Formação de Oficiais reunindo as normas e diretrizes necessárias para a correta aplicação das disciplinas.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content Body */}
                                    {contentLoading ? (
                                        <div className="flex flex-col items-center justify-center py-40 bg-white dark:bg-[#080c09] border border-slate-200 dark:border-white/10 shadow-2xl rounded-b-3xl relative z-10 transition-colors">
                                            <div className="relative">
                                                <div className="absolute inset-0 border-2 border-brand/20 rounded-full animate-ping opacity-50"></div>
                                                <Loader2 className="animate-spin text-brand relative z-10" size={56} />
                                            </div>
                                            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-8 animate-pulse bg-slate-100 dark:bg-white/5 px-4 py-2 rounded-sm border border-slate-200 dark:border-white/10">Sincronizando Base de Dados...</span>
                                        </div>
                                    ) : (
                                        <div className="bg-white dark:bg-[#0a0e0b] px-4 py-8 md:p-20 shadow-[0_15px_60px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)] rounded-b-3xl border border-slate-200 dark:border-white/5 border-t-0 relative overflow-hidden backdrop-blur-xl z-10 min-h-[600px] transition-colors">

                                            {/* Subtle line decorations for premium feel */}
                                            <div className="absolute top-0 left-12 w-1 h-32 bg-gradient-to-b from-brand/50 to-transparent rounded-b-full"></div>
                                            <div className="absolute top-0 right-12 w-px h-64 bg-gradient-to-b from-white/10 to-transparent"></div>
                                            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand/20 to-transparent"></div>

                                            {/* Elegant deeper watermark */}
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none mix-blend-overlay z-0">
                                                <img src={LOGO_URL} className="w-[800px] h-auto grayscale opacity-[0.015]" />
                                            </div>

                                            <div className="relative z-10 max-w-[1000px] mx-auto pb-12">
                                                <ContentRenderer blocks={manualContent} onSkipWarning={() => { }} currentUser={currentUser} textZoom={textZoom} />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </main>
                    </div>

                    <Footer />
                </div>
            );
        };

        const container = document.getElementById('root');
        const root = ReactDOM.createRoot(container);
        root.render(<App />);