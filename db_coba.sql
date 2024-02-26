--
-- PostgreSQL database dump
--

-- Dumped from database version 15.0
-- Dumped by pg_dump version 15.0

-- Started on 2024-02-26 19:23:35

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 217 (class 1259 OID 16498)
-- Name: departemen; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.departemen (
    id integer NOT NULL,
    nama character varying(50) NOT NULL
);


ALTER TABLE public.departemen OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 16497)
-- Name: departemen_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.departemen_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.departemen_id_seq OWNER TO postgres;

--
-- TOC entry 3335 (class 0 OID 0)
-- Dependencies: 216
-- Name: departemen_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.departemen_id_seq OWNED BY public.departemen.id;


--
-- TOC entry 215 (class 1259 OID 16480)
-- Name: karyawan; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.karyawan (
    id integer NOT NULL,
    nama character varying(255),
    jabatan character varying(255),
    tanggal_lahir date,
    departemen integer
);


ALTER TABLE public.karyawan OWNER TO postgres;

--
-- TOC entry 214 (class 1259 OID 16479)
-- Name: karyawan_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.karyawan_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.karyawan_id_seq OWNER TO postgres;

--
-- TOC entry 3336 (class 0 OID 0)
-- Dependencies: 214
-- Name: karyawan_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.karyawan_id_seq OWNED BY public.karyawan.id;


--
-- TOC entry 3179 (class 2604 OID 16501)
-- Name: departemen id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.departemen ALTER COLUMN id SET DEFAULT nextval('public.departemen_id_seq'::regclass);


--
-- TOC entry 3178 (class 2604 OID 16483)
-- Name: karyawan id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.karyawan ALTER COLUMN id SET DEFAULT nextval('public.karyawan_id_seq'::regclass);


--
-- TOC entry 3329 (class 0 OID 16498)
-- Dependencies: 217
-- Data for Name: departemen; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.departemen (id, nama) VALUES (1, 'Information Technology');
INSERT INTO public.departemen (id, nama) VALUES (2, 'Finance');
INSERT INTO public.departemen (id, nama) VALUES (3, 'Human Resources');
INSERT INTO public.departemen (id, nama) VALUES (4, 'General Affair');


--
-- TOC entry 3327 (class 0 OID 16480)
-- Dependencies: 215
-- Data for Name: karyawan; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.karyawan (id, nama, jabatan, tanggal_lahir, departemen) VALUES (2, 'Wakid', 'Supervisor', '1977-12-01', 1);
INSERT INTO public.karyawan (id, nama, jabatan, tanggal_lahir, departemen) VALUES (3, 'Didi', 'Senior Officer', '1988-09-22', 2);
INSERT INTO public.karyawan (id, nama, jabatan, tanggal_lahir, departemen) VALUES (1, 'Aji', 'Officer', '1970-11-17', 8);


--
-- TOC entry 3337 (class 0 OID 0)
-- Dependencies: 216
-- Name: departemen_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.departemen_id_seq', 4, true);


--
-- TOC entry 3338 (class 0 OID 0)
-- Dependencies: 214
-- Name: karyawan_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.karyawan_id_seq', 3, true);


--
-- TOC entry 3183 (class 2606 OID 16503)
-- Name: departemen departemen_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.departemen
    ADD CONSTRAINT departemen_pkey PRIMARY KEY (id);


--
-- TOC entry 3181 (class 2606 OID 16487)
-- Name: karyawan karyawan_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.karyawan
    ADD CONSTRAINT karyawan_pkey PRIMARY KEY (id);


-- Completed on 2024-02-26 19:23:36

--
-- PostgreSQL database dump complete
--

