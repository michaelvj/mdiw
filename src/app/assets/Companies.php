<?php
/**
 * @package    Sync System
 * @author     MohammadHossein Abedinpour
 * @copyright  2015 Master Solutions
 * @version    1.00
 */
$Config['DB'] = array(
    'ksn' => array(
        'Host' => '172.20.1.90',
        'User' => 'mns',
        'Pass' => 'Welcome110#',
        'DBName' => 'Columbo_ksn.inspectionworld.nl',
		'JSConfig' => array(
            'oDataServiceHost' => 'http://ksn.inspectionworld.nl/columboWS/columboGBSWS.svc/',
            'PDFURL' => 'http://ksn.inspectionworld.nl/columboWS/reportViewer.aspx/',
            'ImagesURL' => 'http://ksn.inspectionworld.nl/columboWS/retriveimage.aspx/',
            'ColumboAppURL' => 'http://ksn.inspectionworld.nl/columboApp',
            'PDFTemplates' => array(
                'NeN3140' => array(
                    'Template1',
                    'Template2'
                )
            )
        )
    ),
    'kvvm' => array(
        'Host' => '172.20.1.90',
        'User' => 'mns',
        'Pass' => 'Welcome110#',
        'DBName' => 'Columbo_kvvm.inspectionworld.nl',
		'JSConfig' => array(
            'oDataServiceHost' => 'http://kvvm.inspectionworld.nl/columboWS/columboGBSWS.svc/',
            'PDFURL' => 'http://kvvm.inspectionworld.nl/columboWS/reportViewer.aspx/',
            'ImagesURL' => 'http://kvvm.inspectionworld.nl/columboWS/retriveimage.aspx/',
            'ColumboAppURL' => 'http://kvvm.inspectionworld.nl/columboApp',
            'PDFTemplates' => array(
                'Trap' => array(
                    'Insprapport'
                )
            )
        )
    ),
    'portal' => array(
        'Host' => 'portal.biom.nl',
        'User' => 'mns',
        'Pass' => 'Welcome110#',
        'DBName' => 'Columbo_portal.biom.nl',
		'JSConfig' => array(
            'oDataServiceHost' => 'http://portal.biom.nl/columboWS/columboGBSWS.svc/',
            'PDFURL' => 'http://portal.biom.nl/columboWS/reportViewer.aspx',
            'ImagesURL' => 'http://portal.biom.nl/columboWS/retriveimage.aspx/',
            'ColumboAppURL' => 'http://portal.biom.nl/columboApp',
            'PDFTemplates' => array(
                'BIOM' => array(
                    'BIOM'
                )
            )
        )
    ),
     'hew' => array(
        'Host' => '172.20.1.90',
        'User' => 'mns',
        'Pass' => 'Welcome110#',
        'DBName' => 'Columbo_hew.inspectionworld.nl',
		'JSConfig' => array(
            'oDataServiceHost' => 'http://hew.inspectionworld.nl/columboWS/columboGBSWS.svc/',
            'PDFURL' => 'http://hew.inspectionworld.nl/columboWS/reportViewer.aspx/',
            'ImagesURL' => 'http://hew.inspectionworld.nl/columboWS/retriveimage.aspx/',
            'ColumboAppURL' => 'http://hew.inspectionworld.nl/columboApp',
            'PDFTemplates' => array(
                'NeN3140' => array(
                    'Template1',
                    'Template2'
                )
            )
        )
    ),
    'leenheer' => array(
        'Host' => '172.20.1.90',
        'User' => 'mns',
        'Pass' => 'Welcome110#',
        'DBName' => 'Columbo_leenheer.inspectionworld.nl',
		'JSConfig' => array(
            'oDataServiceHost' => 'http://leenheer.inspectionworld.nl/columboWS/columboGBSWS.svc/',
            'PDFURL' => 'http://leenheer.inspectionworld.nl/columboWS/reportViewer.aspx/',
            'ImagesURL' => 'http://leenheer.inspectionworld.nl/columboWS/retriveimage.aspx/',
            'ColumboAppURL' => 'http://leenheer.inspectionworld.nl/columboApp',
            'PDFTemplates' => array(
                'NeN3140' => array(
                    'Template1',
                    'Template2'
                )
            )
        )
    ),
    'columbo' => array(
        'Host' => '172.20.1.90',
        'User' => 'mns',
        'Pass' => 'Welcome110#',
        'DBName' => 'Columbo_columbo.inspectionworld.nl',
    ),
    'technikeur' => array(
        'Host' => '172.20.1.90',
        'User' => 'mns',
        'Pass' => 'Welcome110#',
        'DBName' => 'Columbo_technikeur.inspectionworld.nl',
    ),
    'dev' => array(
        'Host' => '172.20.1.90',
        'User' => 'mns',
        'Pass' => 'Welcome110#',
        'DBName' => 'Columbo_dev.inspectionworld.nl',
        'JSConfig' => array(
            'oDataServiceHost' => 'http://dev.inspectionworld.nl/columbo4devWS/columboGBSWS.svc/',
            'PDFURL' => 'http://dev.inspectionworld.nl/columbo4devWS/reportViewer.aspx/',
            'ImagesURL' => 'http://dev.inspectionworld.nl/columbo4devWS/retriveimage.aspx/',
            'ColumboAppURL' => 'http://dev.inspectionworld.nl/columboApp',
            'PDFTemplates' => array(
                'NeN3140' => array(
                    'Template1',
                    'Template2'
                ),
                'BIOM' => array(
                    'Template1',
                    'Template2'
                ),
				'Trap' => array(
                    'Insprapport'
                ),
				'Fire' => array(
                    'Insprapport'
                ),
				'Demo' => array(
                    'Insprapport'
                ),
				'Tilbanden' => array(
                    'Insprapport'
                )
            )
        )
    ),
    'demo' => array(
        'Host' => '172.20.1.90',
        'User' => 'mns',
        'Pass' => 'Welcome110#',
        'DBName' => 'Columbo_demo.inspectionworld.nl',
		'JSConfig' => array(
            'oDataServiceHost' => 'http://demo.inspectionworld.nl/columboWS/columboGBSWS.svc/',
            'PDFURL' => 'http://demo.inspectionworld.nl/columboWS/reportViewer.aspx/',
            'ImagesURL' => 'http://demo.inspectionworld.nl/columboWS/retriveimage.aspx/',
            'ColumboAppURL' => 'http://demo.inspectionworld.nl/columboApp',
            'PDFTemplates' => array(
                'NeN3140' => array(
                    'Template1',
                    'Template2'
                ),
                'BIOM' => array(
                    'Template1',
                    'Template2'
                ),
				'Trap' => array(
                    'Insprapport'
                ),
				'Fire' => array(
                    'Insprapport'
                ),
				'Demo' => array(
                    'Insprapport'
                ),
				'Tilbanden' => array(
                    'Insprapport'
                )
            )
        )
    ),
	'demo2' => array(
        'Host' => '172.20.1.90',
        'User' => 'mns',
        'Pass' => 'Welcome110#',
        'DBName' => 'Columbo_demo2.inspectionworld.nl',
		'JSConfig' => array(
            'oDataServiceHost' => 'http://demo2.inspectionworld.nl/columboWS/columboGBSWS.svc/',
            'PDFURL' => 'http://demo2.inspectionworld.nl/columboWS/reportViewer.aspx/',
            'ImagesURL' => 'http://demo2.inspectionworld.nl/columboWS/retriveimage.aspx/',
            'ColumboAppURL' => 'http://demo2.inspectionworld.nl/columboApp',
            'PDFTemplates' => array(
                'NeN3140' => array(
                    'Template1',
                    'Template2'
                ),
                'BIOM' => array(
                    'Template1',
                    'Template2'
                ),
				'Trap' => array(
                    'Insprapport'
                ),
				'Fire' => array(
                    'Insprapport'
                ),
				'Demo' => array(
                    'Insprapport'
                ),
				'Tilbanden' => array(
                    'Insprapport'
                )
            )
        )
    ),
	'aquaservademo' => array(
        'Host' => '172.20.1.90',
        'User' => 'mns',
        'Pass' => 'Welcome110#',
        'DBName' => 'Columbo_aquaservademo.inspectionworld.nl',
		'JSConfig' => array(
            'oDataServiceHost' => 'http://aquaservademo.inspectionworld.nl/columboWS/columboGBSWS.svc/',
            'PDFURL' => 'http://aquaservademo.inspectionworld.nl/columboWS/reportViewer.aspx/',
            'ImagesURL' => 'http://aquaservademo.inspectionworld.nl/columboWS/retriveimage.aspx/',
            'ColumboAppURL' => 'http://aquaservademo.inspectionworld.nl/columboApp',
            'PDFTemplates' => array(
                'NeN3140' => array(
                    'Template1',
                    'Template2'
                ),
                'BIOM' => array(
                    'Template1',
                    'Template2'
                ),
				'Trap' => array(
                    'Insprapport'
                ),
				'Fire' => array(
                    'Insprapport'
                ),
				'Demo' => array(
                    'Insprapport'
                ),
				'Tilbanden' => array(
                    'Insprapport'
                )
            )
        )
    ),
    'vosenergie' => array(
        'Host' => '172.20.1.90',
        'User' => 'mns',
        'Pass' => 'Welcome110#',
        'DBName' => 'Columbo_vosenergie.inspectionworld.nl',
		'JSConfig' => array(
            'oDataServiceHost' => 'http://vosenergie.inspectionworld.nl/columboWS/columboGBSWS.svc/',
            'PDFURL' => 'http://vosenergie.inspectionworld.nl/columboWS/reportViewer.aspx/',
            'ImagesURL' => 'http://vosenergie.inspectionworld.nl/columboWS/retriveimage.aspx/',
            'ColumboAppURL' => 'http://vosenergie.inspectionworld.nl/columboApp',
            'PDFTemplates' => array(
                'NeN3140' => array(
                    'Template1',
                    'Template2'
                )
            )
        )
    ),
	'trial' => array(
        'Host' => '172.20.1.90',
        'User' => 'mns',
        'Pass' => 'Welcome110#',
        'DBName' => 'Columbo_trial.inspectionworld.nl',
		'JSConfig' => array(
            'oDataServiceHost' => 'http://trial.inspectionworld.nl/columboWS/columboGBSWS.svc/',
            'PDFURL' => 'http://trial.inspectionworld.nl/columboWS/reportViewer.aspx/',
            'ImagesURL' => 'http://trial.inspectionworld.nl/columboWS/retriveimage.aspx/',
            'ColumboAppURL' => 'http://trial.inspectionworld.nl/columboApp',
            'PDFTemplates' => array(
                'NeN3140' => array(
                    'Template1',
                    'Template2'
                ),
                'BIOM' => array(
                    'Template1',
                    'Template2'
                ),
				'Trap' => array(
                    'Insprapport'
                ),
				'Fire' => array(
                    'Insprapport'
                ),
				'Demo' => array(
                    'Insprapport'
                ),
				'Tilbanden' => array(
                    'Insprapport'
                )
            )
        )
    )
);
