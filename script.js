document.addEventListener('DOMContentLoaded', function() {

    // --- 1. DEFINICIÓN DE DATOS ---
    const areasSanitarias = {
        'Área I': { nombre: 'Área I (H. Arrixaca)' },
        'Área II': { nombre: 'Área II (H. Santa Lucía/Rosell)' },
        'Área III': { nombre: 'Área III (H. Rafael Méndez)' },
        'Área IV': { nombre: 'Área IV (H. Comarcal del Noroeste)' },
        'Área V': { nombre: 'Área V (H. Virgen del Castillo)' },
        'Área VI': { nombre: 'Área VI (H. Morales Meseguer)' },
        'Área VII': { nombre: 'Área VII (H. Reina Sofía)' },
        'Área VIII': { nombre: 'Área VIII (H. Los Arcos del Mar Menor)' },
        'Área IX': { nombre: 'Área IX (H. Lorenzo Guirao)' }
    };

    const serviciosHospitalarios = [ /* Lista completa y ordenada */
        'ACV Angiologia Cirugia Vascular', 'ACL Análisis Clínicos', 'ALG Alergología', 'ALGI Alergologia Inf.', 
        'ANR Anestesia Reanimacion', 'ANRI Anestesia Reanimación Infantil', 'APA Anatomía Patológica', 
        'AP Atención Primaria', 'BIO Bioquímica Clínica', 'CAAS CORE Cronicidad Avanzada-At.Sociosanitaria', 
        'CAD_MU Centro de Atención a Drogodependencia Mula', 'CAR Cardiología', 'CARI Cardiologia Inf.', 
        'CCA Cirugía Cardiaca', 'CCAI C. Cardiaca Infantil', 'CGD Cirugia General y Digestivo', 
        'CMF Cirugía Maxilofacial', 'CMFI Cirugia Maxilofacial Inf.', 'CP CP Murcia', 'CP CP Murcia II', 
        'CPE Cirugía Pediátrica', 'CPII CP Murcia II', 'CPL Cirugia plastica y reparadora', 
        'CPLI C. Plast. y Rep. Infantil', 'CSMMA Salud Mental Adultos Mula', 'CSMMI Salud Mental Mula Infantil', 
        'CTO Cirugía Torácica', 'DER Dermatología', 'DERI Dermatología Infantil', 'DIA Dialisis', 
        'DIAI Dialisis Infantil', 'DIG Digestivo', 'DIGI Digestivo Inf.', 'DME Dirección Médica', 'END Endocrinologia y Nutricion', 
        'ENDG Endocrinología Ginecológica', 'ENDI Endocrinologia Inf.', 'ENF Enfermería', 'EST Esterilidad', 
        'ETAC ASERTIVO COMUNITARIO', 'FAR Farmacia Hospitalaria', 'FIS Fisioterapia', 'GEN Genética', 'GIN Ginecología', 
        'GRT Geriatría', 'HAD Hosp. A Domicilio', 'HADI Hosp. a Domicilio Infantil', 'HDM HOSPITAL DE DIA MEDICO', 
        'HDQ HOSPITAL DE DIA QUIRURGICO', 'HDIA-IJ HOSPITAL DE DÍA INFANTO-JUVENIL SALUD MENTAL', 'HEM Hematología', 
        'HEMO Hemodinámica', 'INF M.I. Infecciosas', 'INFI Infecciosas Infantil', 'INM Inmunologia', 'MIC Microbiología', 
        'MIR Medicina Interna', 'MIR2 Medicina Interna 2', 'MIV Medicina Intensiva - MIV', 'MIVI Medicina Intensiva Inf. - (MIVI Inf.)', 
        'MIVNEO MIV Neonatal', 'MNU Medicina Nuclear', 'MPR Medicina Preventiva', 'MTRO Medicina Tropical', 'NEF Nefrología', 
        'NEFI Nefrologia Inf.', 'NEO Neonatología', 'NFL Neurofisiologia clinica', 'NML Neumología', 'NMLI Neumologia Inf.', 
        'NRC Neurocirugía', 'NRCI Neurocirugia Infantil', 'NRL Neurología', 'NRLI Neurologia Inf.', 'OBG Obstetricia y Ginecología', 
        'OBS Obstetricia', 'OFT Oftalmología', 'OFTI Oftalmología Infantil', 'ONC Oncología Médica', 'ONCG Oncología Ginecológica', 
        'ONCI Oncologia Inf.', 'ONR Oncología Radioterápica', 'ORL Otorrinolaringología', 'ORLI ORL Infantil', 
        'PCC Paciente crónico complejo', 'PED Pediatría', 'PIJ Psiquiatría Infanto-Juvenil', 'PRAD Radiología Primaria', 
        'PRL PREVENCIÓN DE RIESGOS LABORALES', 'PSII Psicología Infantil', 'PSQ Psiquiatría', 'QRAD Radiología (C.E.)', 
        'RA Rehabilitacion Adultos', 'RAD Radiodiagnostico', 'RADI Rad. Infantil', 'RADF Radio-Farmacia', 'RADM Rad. Maternal', 
        'REH Rehabilitación', 'REU Reumatología', 'REUI Reumatología Infantil', 'RFH Radiofísica Hospitalaria', 'SCSS Servicio de Coordinación Sociosanitario', 
        'SM Salud Medioambiental', 'SMA Salud Mental Adultos', 'SMAEP Salud Mental Adultos (El Palmar)', 'SMI Salud Mental Infanto Juvenil', 
        'SMIEP Salud Mental Infanto-Juvenil El Palmar', 'TRA Traumatología', 'TRAI Traumatología Infantil', 'UCC Unidad de Coordinación a la Comunidad', 
        'UCE Unidad de Corta Estancia', 'UCP U. Paliativos', 'UCPI U. Paliativos Inf.', 'UDE Unidad de Demencias', 'UDO U. del dolor', 
        'UENDO Unidad de Endoscopias', 'UFTM Unidad de Fases Tempranas de Medicamentos (Ensayos Clinicos)', 'UGA U. Ginecologica de Apoyo', 
        'UHM Unidad de Hospitalización de Molina', 'UHSJ Unidad de Hospitalización de San José', 'UMAM U. de Mama', 'UMF U. Materno Fetal', 
        'UPD U. Pie Diabético', 'UPCCI U. Paciente Crónico Complejo Infantil', 'URA Unidad de Reproducción Asistida', 
        'URAIPI UR Asistencia Integral Paciente Infantil', 'URAIPIC URAIPI Paciente Infantil Complejo', 'URAIPID URAIPI Paciente Infantil Paliativo', 
        'UARR Unidad de Arritmias', 'URG Urgencias', 'URGI Urg. Infantil', 'URGM Urg. Maternal', 'URHADI URHADI Hospitalización a Domicilio Infantil', 
        'URO Urología', 'UROI Urología Infantil', 'URF Unidad de Recuperación Funcional', 'USM Unidad Salud Mental - Alcantarilla', 
        'UTOX Unidad de Torax (DG Salud Pública)'
    ].sort();


    // --- 2. REFERENCIAS A ELEMENTOS DEL DOM ---
    const form = document.getElementById('ruleForm');
    const formTitle = document.getElementById('form-title');
    const submitButton = document.getElementById('submit-button');
    const cancelEditButton = document.getElementById('cancel-edit-button');
    const origenAreaSelect = document.getElementById('origenArea');
    const destinoAreaSelect = document.getElementById('destinoArea');
    const destinoServicioSelect = document.getElementById('destinoServicio');
    const citaPropiaAreaRadio = document.getElementById('citaPropiaArea');
    const citaOtraAreaRadio = document.getElementById('citaOtraArea');
    const otroAreaContainer = document.getElementById('otroAreaContainer');
    const citaAreasDestinoSelect = document.getElementById('citaAreasDestino');
    const rulesTableBody = document.getElementById('rulesTableBody');
    const searchInput = document.getElementById('searchInput'); 
    const exportCsvButton = document.getElementById('exportCsvButton');
    
    let rules = []; 
    let ruleIdCounter = 1;
    let editState = {
        isEditing: false,
        ruleId: null
    };

    // --- 3. FUNCIONES DE INICIALIZACIÓN Y CARGA DE DATOS ---
    function populateSelect(selectElement, data) {
        selectElement.innerHTML = '';
        if (Array.isArray(data)) {
            data.forEach(item => {
                const option = document.createElement('option');
                option.value = item;
                option.textContent = item;
                selectElement.appendChild(option);
            });
        } else {
            for (const key in data) {
                const option = document.createElement('option');
                option.value = data[key].nombre; 
                option.textContent = data[key].nombre;
                selectElement.appendChild(option);
            }
        }
    }

    function initializeFormControls() {
        populateSelect(origenAreaSelect, areasSanitarias);
        populateSelect(destinoAreaSelect, areasSanitarias);
        populateSelect(citaAreasDestinoSelect, areasSanitarias);
        populateSelect(destinoServicioSelect, serviciosHospitalarios);
    }
    
    // --- 4. GESTIÓN DE EVENTOS ---
    [citaPropiaAreaRadio, citaOtraAreaRadio].forEach(radio => {
        radio.addEventListener('change', function() {
            otroAreaContainer.style.display = this.value === 'otra' ? 'block' : 'none';
        });
    });

    form.addEventListener('submit', handleFormSubmit);
    cancelEditButton.addEventListener('click', resetFormMode);
    searchInput.addEventListener('input', handleSearch);
    exportCsvButton.addEventListener('click', exportToCSV);

    // --- 5. LÓGICA DE REGLAS (AÑADIR, EDITAR, ELIMINAR) ---
    function handleFormSubmit(event) {
        event.preventDefault();
        const ruleData = getRuleDataFromForm();
        if (!ruleData) return;

        if (editState.isEditing) {
            updateRule(editState.ruleId, ruleData);
        } else {
            addNewRule(ruleData);
        }
        searchInput.value = '';
        handleSearch();
    }

    function getRuleDataFromForm() {
        const origenAreas = Array.from(origenAreaSelect.selectedOptions).map(o => o.text);
        const destinoArea = destinoAreaSelect.value;
        const destinoServicio = destinoServicioSelect.value;
        
        let citaOtrasAreas = [];
        if (citaOtraAreaRadio.checked) {
            citaOtrasAreas = Array.from(citaAreasDestinoSelect.selectedOptions).map(o => o.text);
            if (citaOtrasAreas.length === 0) {
                alert('Por favor, especifique al menos un área para la cita presencial.');
                return null;
            }
        }
        
        if (origenAreas.length === 0) {
            alert('Debe seleccionar al menos un área de origen.');
            return null;
        }

        return {
            origen: { areas: origenAreas },
            destino: { area: destinoArea, servicio: destinoServicio },
            cita: { tipo: citaPropiaAreaRadio.checked ? 'propia' : 'otra', areas: citaOtrasAreas }
        };
    }

    function addNewRule(ruleData) {
        const newRule = { id: ruleIdCounter++, ...ruleData };
        rules.push(newRule);
        saveAndRender();
        resetFormMode();
    }
    
    function updateRule(id, ruleData) {
        const ruleIndex = rules.findIndex(r => r.id === id);
        if (ruleIndex > -1) {
            rules[ruleIndex] = { id: id, ...ruleData };
            saveAndRender();
            resetFormMode();
        }
    }
    
    window.editRule = function(id) {
        const rule = rules.find(r => r.id === id);
        if (!rule) return;

        editState.isEditing = true;
        editState.ruleId = id;
        formTitle.textContent = `Editando Regla ID: ${id}`;
        submitButton.innerHTML = `<i class="bi bi-save-fill me-2"></i>Guardar Cambios`;
        submitButton.classList.replace('btn-primary', 'btn-success');
        cancelEditButton.style.display = 'block';

        Array.from(origenAreaSelect.options).forEach(opt => opt.selected = rule.origen.areas.includes(opt.value));
        destinoAreaSelect.value = rule.destino.area;
        destinoServicioSelect.value = rule.destino.servicio;

        if(rule.cita.tipo === 'propia') {
            citaPropiaAreaRadio.checked = true;
            otroAreaContainer.style.display = 'none';
        } else {
            citaOtraAreaRadio.checked = true;
            otroAreaContainer.style.display = 'block';
            Array.from(citaAreasDestinoSelect.options).forEach(opt => opt.selected = rule.cita.areas.includes(opt.value));
        }
    }

    window.deleteRule = function(id) {
        if (confirm(`¿Estás seguro de que quieres eliminar la regla ID ${id}?`)) {
            rules = rules.filter(rule => rule.id !== id);
            if(editState.isEditing && editState.ruleId === id) {
                resetFormMode();
            }
            saveAndRender();
            handleSearch();
        }
    }

    function resetFormMode() {
        form.reset();
        editState.isEditing = false;
        editState.ruleId = null;
        formTitle.textContent = 'Crear Nueva Regla';
        submitButton.innerHTML = `<i class="bi bi-plus-circle-fill me-2"></i>Añadir Regla`;
        submitButton.classList.replace('btn-success', 'btn-primary');
        cancelEditButton.style.display = 'none';
        otroAreaContainer.style.display = 'none';
    }
    
    function renderRules(rulesToRender = rules) {
        rulesTableBody.innerHTML = '';
        
        if (rulesToRender.length === 0) {
            rulesTableBody.innerHTML = '<tr><td colspan="5" class="text-center">No se encontraron reglas.</td></tr>';
            return;
        }

        rulesToRender.forEach(rule => {
            const tr = document.createElement('tr');
            let citaText = rule.cita.tipo === 'propia' ? 'Propia área' : `Otra área: ${rule.cita.areas.join(', ')}`;
            
            tr.innerHTML = `
                <td>${rule.id}</td>
                <td><b>Área/s:</b> ${rule.origen.areas.join(', ')}</td>
                <td><b>Área:</b> ${rule.destino.area}<br><b>Servicio:</b> ${rule.destino.servicio}</td>
                <td>${citaText}</td>
                <td class="text-center action-buttons">
                    <button class="btn btn-warning btn-sm" onclick="editRule(${rule.id})" title="Editar"><i class="bi bi-pencil-square"></i></button>
                    <button class="btn btn-danger btn-sm" onclick="deleteRule(${rule.id})" title="Eliminar"><i class="bi bi-trash-fill"></i></button>
                </td>
            `;
            rulesTableBody.appendChild(tr);
        });
    }

    function saveRulesToLocalStorage() {
        localStorage.setItem('compasRules', JSON.stringify(rules));
    }
    
    function loadRulesFromLocalStorage() {
        const savedRules = localStorage.getItem('compasRules');
        if (savedRules) {
            try {
                rules = JSON.parse(savedRules) || [];
                if (Array.isArray(rules) && rules.length > 0) {
                    const validIds = rules.map(r => r.id).filter(id => typeof id === 'number');
                    if (validIds.length > 0) {
                        ruleIdCounter = Math.max(...validIds) + 1;
                    } else { ruleIdCounter = 1; }
                } else { rules = []; ruleIdCounter = 1; }
            } catch (e) {
                console.error("Error al cargar las reglas desde LocalStorage:", e);
                rules = []; ruleIdCounter = 1;
            }
        }
    }
    
    function saveAndRender() {
        saveRulesToLocalStorage();
        renderRules();
    }

    // --- 6. FUNCIONES DE BÚSQUEDA Y EXPORTACIÓN ---
    function handleSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        const filteredRules = rules.filter(rule => {
            if (!searchTerm) return true;
            const origenAreas = rule.origen.areas.join(' ').toLowerCase();
            const destinoArea = rule.destino.area.toLowerCase();
            const destinoServicio = rule.destino.servicio.toLowerCase();
            const id = rule.id.toString();

            return id.includes(searchTerm) ||
                   origenAreas.includes(searchTerm) ||
                   destinoArea.includes(searchTerm) ||
                   destinoServicio.includes(searchTerm);
        });
        renderRules(filteredRules);
    }

    function exportToCSV() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        const rulesToExport = rules.filter(rule => {
            if (!searchTerm) return true;
            const origenAreas = rule.origen.areas.join(' ').toLowerCase();
            const destinoArea = rule.destino.area.toLowerCase();
            const destinoServicio = rule.destino.servicio.toLowerCase();
            const id = rule.id.toString();
            return id.includes(searchTerm) || origenAreas.includes(searchTerm) || destinoArea.includes(searchTerm) || destinoServicio.includes(searchTerm);
        });

        if (rulesToExport.length === 0) {
            alert("No hay reglas (visibles) para exportar.");
            return;
        }

        const rows = [
            ["ID", "Areas Origen", "Area Destino", "Servicio Destino", "Tipo Cita", "Areas Cita Derivada"]
        ];

        rulesToExport.forEach(rule => {
            const origenAreas = rule.origen.areas.join('; ');
            const citaAreas = rule.cita.areas.join('; ');
            rows.push([
                rule.id,
                origenAreas,
                rule.destino.area,
                rule.destino.servicio,
                rule.cita.tipo,
                citaAreas
            ]);
        });

        let csvContent = rows.map(e => e.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(",")).join("\n");
        const blob = new Blob([`\uFEFF${csvContent}`], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement("a");
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", "reglas_compas.csv");
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    // --- INICIO DE LA APLICACIÓN ---
    loadRulesFromLocalStorage();
    initializeFormControls();
    renderRules();
});